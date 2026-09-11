import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const htmlPath = path.join(root, 'wechseljahre', 'index.html');
const products = [
  ['muscles','-32%','remifemin-200.jpeg','34,99 €','51,24 €','Remifemin bei leichten & mittleren Wechseljahresbeschwerden','200 St · 0,17 € / St'],
  ['immune','-28%','femiloges-90.jpeg','36,60 €','50,96 €','femiLoges','90 St · 0,41 € / St'],
  ['muscles','-24%','remifemin-mono-90.jpeg','40,08 €','52,49 €','Remifemin mono bei Wechseljahresbeschwerden','90 St · 0,45 € / St'],
  ['muscles','-14%','sweatosan-100.jpeg','38,95 €','45,35 €','Sweatosan','100 St · 0,39 € / St'],
  ['energy immune','-30%','neurexan-100.jpeg','20,30 €','28,99 €','Neurexan','100 St · 0,20 € / St'],
  ['energy','-12%','baldriparan-stark-60.jpeg','23,70 €','26,94 €','Baldriparan Stark für die Nacht','60 St · 0,40 € / St'],
  ['energy','-27%','kytta-sedativum-100.jpeg','26,28 €','35,99 €','Kytta-Sedativum Dragees','100 St · 0,26 € / St'],
];

const sets = [
  ['muscles','-15%',['remifemin-200.jpeg','sweatosan-100.jpeg'],'46,56 €','54,66 €','Remifemin 100 St + Sweatosan 50 St','2 Produkte'],
  ['muscles heart','-26%',['remifemin-mono-90.jpeg','remifemin-feuchtcreme.jpeg','sedacur-forte-100.jpeg'],'54,80 €','73,90 €','Remifemin 60 St + Remifemin Feuchtcreme 50 g + Sedacur forte','3 Produkte'],
  ['energy immune','-27%',['femiloges-90.jpeg','dormiloges-60.jpeg'],'53,53 €','73,33 €','femiLoges 60 St + dormiLoges 3 mg 60 St','2 Produkte'],
  ['energy','-12%',['baldriparan-stark-120.jpeg','dormiloges-60.jpeg'],'53,48 €','60,60 €','Baldriparan Stark für die Nacht 120 St + Melatonin Einschlaf-Spray','2 Produkte'],
  ['energy','-28%',['lasea-56.jpeg','magnesium-verla-n-200.jpeg'],'47,28 €','65,66 €','Lasea 56 St + Magnesium Verla N 200 St','2 Produkte'],
  ['heart','-16%',['vagisan-feuchtcreme-50.jpeg','vagisan-schutzsalbe-75.jpeg'],'48,95 €','58,25 €','Vagisan Feuchtcreme 50 g + Vagisan Schutz-Salbe 75 ml','3 Produkte'],
  ['skin','-42%',['agnus-castus-al.jpeg','vitamin-b-loges-120.jpeg'],'48,07 €','82,88 €','Agnus Castus AL + Vitamin B-Komplex','3 Produkte'],
];

const esc = (s) => s.replaceAll('&', '&amp;');
const image = (name, alt = '') => `<img src="assets/products/menopause/${name}" alt="${esc(alt)}" loading="lazy">`;
const card = ([goals, discount, file, price, old, name, unit]) => `<article class="pcard" data-goals="${goals}"><div class="pwell">${image(file,name)}<span class="pdisc">${discount}</span><button class="pplus" data-add aria-label="${esc(name)} hinzufügen">+</button></div><div class="pinfo"><div class="prow"><b>${price}</b><s>${old}</s></div><div class="pname">${esc(name)}</div><div class="punit">${unit}</div></div></article>`;
const setCard = ([goals, discount, files, price, old, name, count]) => `<article class="pcard wide" data-goals="${goals}"><div class="pwell lav"><div class="set-product-images count-${files.length}">${files.map((file) => image(file)).join('')}</div><span class="pdisc">${discount}</span><button class="pplus" data-add aria-label="Set hinzufügen">+</button></div><div class="pinfo"><div class="prow"><b>${price}</b><s>${old}</s></div><div class="pcombo"><span aria-hidden="true">◇</span> Kombi</div><div class="pname">${esc(name)}</div><div class="pclass">${count}</div></div></article>`;
const arrows = (rail) => `<div class="secright"><button class="arrowbtn" data-scroll="#${rail}" data-dir="-1" aria-label="Zurück">‹</button><button class="arrowbtn" data-scroll="#${rail}" data-dir="1" aria-label="Weiter">›</button></div>`;
const chips = `<div class="chips" data-chips><button class="chip" data-goal="muscles">Hitzewallungen</button><button class="chip" data-goal="energy">Schlaf</button><button class="chip" data-goal="immune">Stimmung</button><button class="chip" data-goal="heart">Scheidentrockenheit</button><button class="chip" data-goal="skin">Zyklusveränderungen</button></div>`;
const mixedNote = `<div class="compnote product-module-note"><span class="compico">ⓘ</span><span>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker. Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene, abwechslungsreiche Ernährung und eine gesunde Lebensweise.</span></div>`;
const medicineNote = `<div class="compnote product-module-note"><span class="compico">ⓘ</span><span>Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und fragen Sie Ihren Arzt oder Apotheker.</span></div>`;

const modules = `<section class="wrap sec product-module">
  <div class="sechead"><div><h2 class="secttl">Bestseller</h2><p class="secsub">Die meistbestellten Wechseljahres-Produkte</p></div>${arrows('popRail')}</div>
  ${chips}
  <div class="prail" id="popRail">${products.map(card).join('')}</div>
  ${mixedNote}
</section>

<section class="wrap sec product-module">
  <div class="sechead"><div><h2 class="secttl">Fertige Sets</h2><p class="secsub">Kuratierte Sets – mit einem Klick hinzugefügt.</p></div>${arrows('setRail')}</div>
  ${chips}
  <div class="prail" id="setRail">${sets.map(setCard).join('')}</div>
  <div class="emptynote hidden" id="setsEmpty"><span id="setsEmptyTxt"></span><button class="resetbtn" data-reset>Alle Sets anzeigen</button></div>
  ${medicineNote}
</section>

`;

let html = await readFile(htmlPath, 'utf8');
const start = Math.max(
  html.indexOf('<section class="wrap sec legacy-vitamin-products">'),
  html.indexOf('<section class="wrap sec product-module">'),
);
const end = html.indexOf('<section class="wrap partner-section">', start);
if (start < 0 || end < 0) throw new Error('module boundaries not found');
html = html.slice(0, start) + modules + html.slice(end);
await writeFile(htmlPath, html);
