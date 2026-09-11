import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const htmlPath = path.join(root, 'index.html');
const assetDir = path.join(root, 'assets', 'products', 'vitamins');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const clean = (value) => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/[^a-z0-9äöüß]+/g, ' ')
  .trim();
const slugify = (value) => clean(value).replace(/[ä]/g, 'ae').replace(/[ö]/g, 'oe').replace(/[ü]/g, 'ue').replace(/ß/g, 'ss').replace(/\s+/g, '-').slice(0, 80);

function collectProducts(value, output = [], seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return output;
  seen.add(value);
  if (typeof value.name === 'string' && value.image?.images?.length) output.push(value);
  for (const child of Object.values(value)) collectProducts(child, output, seen);
  return output;
}

function score(query, candidate) {
  const q = clean(query).split(' ');
  const c = clean(candidate.name).split(' ');
  const shared = q.filter((token) => token.length > 1 && c.includes(token)).length;
  const quantity = query.match(/\b\d+\s*(st|ml|g)\b/i)?.[0];
  const packing = JSON.stringify(candidate).toLowerCase();
  return shared * 10 + (clean(candidate.name) === clean(query.replace(/,.*$/, '')) ? 100 : 0) + (quantity && packing.includes(clean(quantity)) ? 25 : 0);
}

function bestImage(product) {
  const images = product.image.images;
  return images.find((item) => item.width === 500)?.url || images.toSorted((a, b) => b.width - a.width)[0]?.url;
}

async function resolveProduct(name) {
  const response = await fetch(`https://onfy.de/suche/${encodeURIComponent(name)}`, { headers: { 'user-agent': 'Mozilla/5.0' } });
  if (!response.ok) throw new Error(`search ${response.status}`);
  const page = await response.text();
  const startTag = '<script id="__NEXT_DATA__" type="application/json">';
  const start = page.indexOf(startTag);
  const end = page.indexOf('</script>', start);
  if (start < 0 || end < 0) throw new Error('missing product data');
  const data = JSON.parse(page.slice(start + startTag.length, end));
  const matches = collectProducts(data).toSorted((a, b) => score(name, b) - score(name, a));
  if (!matches.length || score(name, matches[0]) < 30) throw new Error('no reliable match');
  return bestImage(matches[0]);
}

let html = await readFile(htmlPath, 'utf8');
const railStart = html.indexOf('<div class="prail" id="popRail">');
const railEnd = html.indexOf('<div class="emptynote', railStart);
const rail = html.slice(railStart, railEnd);
const cardStarts = [...rail.matchAll(/<div class="pcard"(?! wide)/g)].map((match) => match.index);
const cards = cardStarts.map((start, index) => rail.slice(start, cardStarts[index + 1] ?? rail.length));
await mkdir(assetDir, { recursive: true });

const replacements = [];
async function syncCard(card) {
  const name = card.match(/<div class="pname">([^<]+)<\/div>/)?.[1];
  if (!name) return;
  try {
    const url = await resolveProduct(name);
    const extension = new URL(url).pathname.split('.').pop() || 'jpeg';
    const filename = `${slugify(name)}.${extension}`;
    const localPath = path.join(assetDir, filename);
    const imageResponse = await fetch(url);
    if (!imageResponse.ok) throw new Error(`image ${imageResponse.status}`);
    await writeFile(localPath, Buffer.from(await imageResponse.arrayBuffer()));
    const updated = card.replace(/<div class="pwell"><svg[\s\S]*?<\/svg><button class="pplus"/, `<div class="pwell"><img class="product-image" src="assets/products/vitamins/${filename}" alt="${name}"><button class="pplus"`);
    replacements.push([card, updated]);
    process.stdout.write(`OK ${name}\n`);
  } catch (error) {
    process.stdout.write(`SKIP ${name}: ${error.message}\n`);
  }
}

for (let index = 0; index < cards.length; index += 6) {
  await Promise.all(cards.slice(index, index + 6).map(syncCard));
  await sleep(500);
}

for (const [before, after] of replacements) html = html.replace(before, after);
await writeFile(htmlPath, html);
console.log(`Synced ${replacements.length}/${cards.length} vitamin product images.`);
