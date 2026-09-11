import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const htmlPath = path.join(root, 'index.html');
let html = await readFile(htmlPath, 'utf8');

html = html.replace(/<section class="wrap sec">(?=\s*<div class="sechead">[^\n]*<h2 class="secttl">Popular right now<\/h2>)/, '<section class="wrap sec product-module">');
html = html.replace(/<section class="wrap sec">(?=\s*<div class="sechead">[^\n]*<h2 class="secttl">Ready-made sets<\/h2>)/, '<section class="wrap sec product-module">');

const railStart = html.indexOf('<div class="prail" id="setRail">');
const railEnd = html.indexOf('<div class="emptynote', railStart);
if (railStart < 0 || railEnd < 0) throw new Error('set rail not found');
let rail = html.slice(railStart, railEnd);
rail = rail.replace(/(<div class="prow">[\s\S]*?<\/div>)(<div class="pname">)/g, '$1<div class="pcombo"><span aria-hidden="true">◇</span> Kombi</div>$2');
html = html.slice(0, railStart) + rail + html.slice(railEnd);

await writeFile(htmlPath, html);
