import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const articles = [
  {
    slug: 'menopause-hitzewallungen',
    category: 'Hitze & Nachtschweiß',
    title: 'Hitzewallungen und Nachtschweiß: was wirklich hilft',
    lead: 'Plötzlich steigt die Hitze auf, das Herz klopft, nachts wird die Wäsche nass – und der Schlaf leidet. Hier lesen Sie, was dabei im Körper passiert, was im Alltag hilft und welche ruhigen ersten Schritte es gibt.',
    minutes: 8,
    image: 'assets/menopause-article-hot-flashes.png',
    alt: 'Frau zieht in einem warmen Moment ihren Cardigan aus',
    intro: 'Hitzewallungen kommen oft ohne Vorwarnung: Ein Hitzegefühl steigt nach oben, die Haut rötet sich, Schweiß tritt auf und danach kann Frösteln folgen. Nachts unterbrechen dieselben Vorgänge den Schlaf. Zu verstehen, was dabei passiert, hilft dabei, Beschwerden einzuordnen und passende nächste Schritte zu wählen.',
    summary: [
      'Hitzewallungen und Nachtschweiß zählen zu den häufigsten Beschwerden in den Wechseljahren.',
      'Durch sinkendes Östrogen reagiert die Temperatursteuerung im Gehirn empfindlicher auf kleine Veränderungen.',
      'Kühle Umgebung, Kleidung in Schichten und das Erkennen persönlicher Auslöser können den Alltag erleichtern.',
      'Die Hormonersatztherapie ist die wirksamste medikamentöse Behandlung und gehört in ein ärztliches Gespräch.',
      'Nachtschweiß zusammen mit Fieber oder ungewolltem Gewichtsverlust sollte ärztlich abgeklärt werden.'
    ],
    body: `
      <h2>Was bei einer Hitzewallung im Körper passiert</h2>
      <p>Die Körpertemperatur wird im Gehirn reguliert. Während der Wechseljahre wird der Bereich, den der Körper als angenehm empfindet, enger. Schon kleine Temperaturschwankungen können deshalb eine starke Gegenreaktion auslösen: Die Gefäße in der Haut weiten sich und der Körper beginnt zu schwitzen.</p>
      <p>Typische Verstärker sind warme Räume, Alkohol, scharfes Essen, viel Koffein, Rauchen oder Stress. Nicht jede Frau reagiert auf dieselben Auslöser – ein persönliches Muster ist hilfreicher als eine lange Verbotsliste.</p>
      <h2>Wie häufig und wie lange?</h2>
      <p>Die Intensität reicht von kaum wahrnehmbaren Wärmegefühlen bis zu Beschwerden, die Schlaf und Alltag deutlich beeinträchtigen. Auch die Dauer ist sehr verschieden: Bei manchen Frauen verschwinden Wallungen nach kurzer Zeit, bei anderen begleiten sie die Übergangsphase über mehrere Jahre.</p>
      <h2>Was im Alltag helfen kann</h2>
      <ul class="article-tip-grid">
        <li><strong>Schichten tragen:</strong> Leichte, atmungsaktive Kleidung lässt sich schnell anpassen.</li>
        <li><strong>Schlafzimmer kühl halten:</strong> Luftige Bettwäsche und ein Glas Wasser am Bett helfen besonders bei Nachtschweiß.</li>
        <li><strong>Auslöser beobachten:</strong> Alkohol, scharfe Speisen, Koffein und Stress können Beschwerden verstärken.</li>
        <li><strong>Regelmäßig bewegen:</strong> Bewegung unterstützt Wohlbefinden, Schlaf und Gewicht – auch wenn sie Wallungen nicht bei jeder Frau direkt reduziert.</li>
        <li><strong>Behandlung besprechen:</strong> Wenn Beschwerden stark sind, lohnt sich ein ärztliches Gespräch über hormonelle und nicht-hormonelle Möglichkeiten.</li>
      </ul>
      <aside class="article-callout article-callout--note"><h3>Ehrlich gesagt: Das Wirksamste ist die Hormontherapie</h3><p>Die Hormonersatztherapie gilt als wirksamste medikamentöse Behandlung gegen Hitzewallungen. Ob sie individuell geeignet ist, hängt von Vorerkrankungen, Risiken und persönlichen Wünschen ab. Pflanzliche oder rezeptfreie Produkte sind kein gleichwertiger Ersatz für jede Situation.</p></aside>
      <aside class="article-callout article-callout--warning"><h3>Diese Warnzeichen gehören ärztlich abgeklärt</h3><ul><li>Nachtschweiß zusammen mit Fieber, Gewichtsverlust oder geschwollenen Lymphknoten.</li><li>Sehr plötzliche oder ungewöhnlich starke Beschwerden.</li><li>Wallungen, die Schlaf und Alltag dauerhaft stark beeinträchtigen.</li></ul></aside>
    `,
    sources: [
      ['Wohlbefinden in den Wechseljahren, IQWiG', 'https://www.gesundheitsinformation.de/wohlbefinden-in-den-wechseljahren.html'],
      ['S3-Leitlinie Peri- und Postmenopause, AWMF 015-062', 'https://register.awmf.org/de/leitlinien/detail/015-062'],
      ['Menopause: identification and management, NICE NG23', 'https://www.nice.org.uk/guidance/ng23']
    ]
  },
  {
    slug: 'menopause-schlafprobleme-innere-unruhe',
    category: 'Schlaf & innere Unruhe',
    title: 'Schlafprobleme und innere Unruhe',
    lead: 'Nachts wach liegen, das Gedankenkarussell, ein plötzliches Herzklopfen – und tagsüber fehlt die Kraft. In den Wechseljahren hat schlechter Schlaf oft konkrete Gründe. Hier lesen Sie, welche das sind und was ruhig weiterhilft.',
    minutes: 8,
    image: 'assets/menopause-article-sleep.png',
    alt: 'Frau sitzt abends am Bett und greift nach einem Buch',
    intro: 'Schlaf trägt Stimmung, Konzentration und Belastbarkeit. Wird er in den Wechseljahren brüchig, kann daraus schnell ein Kreislauf aus Müdigkeit, Anspannung und Grübeln entstehen. Häufig spielen mehrere Faktoren zusammen – von nächtlichen Hitzewallungen bis zu hormonellen Veränderungen und Stress.',
    summary: [
      'Schlafprobleme sind in den Wechseljahren häufig und haben oft mehrere Ursachen zugleich.',
      'Nächtliche Hitzewallungen und Schweißausbrüche unterbrechen den Schlaf besonders oft.',
      'Bei anhaltender Insomnie ist die kognitive Verhaltenstherapie für Insomnie (KVT-I) die Behandlung der ersten Wahl.',
      'Ein kühles Schlafzimmer, feste Zeiten und eine ruhige Abendroutine schaffen gute Voraussetzungen.',
      'Wiederkehrendes Herzrasen sollte ärztlich abgeklärt werden.'
    ],
    body: `
      <h2>Warum der Schlaf in den Wechseljahren leidet</h2>
      <p>Progesteron und Östrogen verändern sich in der Perimenopause. Gleichzeitig können Hitzewallungen aus dem Schlaf reißen. Dazu kommen Belastungen des Alltags, eine empfindlichere Stressreaktion und manchmal ein neues Gefühl innerer Unruhe. Schlechter Schlaf und Anspannung verstärken sich dann gegenseitig.</p>
      <p>Auch Herzklopfen kann nachts stärker auffallen. Es kann zwar in dieser Lebensphase auftreten, sollte aber nicht automatisch den Hormonen zugeschrieben werden.</p>
      <h2>Was im Alltag hilft</h2>
      <ul class="article-tip-grid">
        <li>Feste Schlaf- und Aufstehzeiten – möglichst auch am Wochenende.</li>
        <li>Ein kühles, dunkles Schlafzimmer und atmungsaktive Bettwäsche.</li>
        <li>Abends weniger Alkohol und Koffein; Bildschirme rechtzeitig zur Seite legen.</li>
        <li>Eine wiederkehrende, ruhige Routine zum Herunterkommen.</li>
        <li>Das Bett möglichst nur zum Schlafen nutzen, damit es nicht zum Ort des Grübelns wird.</li>
      </ul>
      <h2>Wenn Schlafhygiene allein nicht reicht</h2>
      <p>Bei hartnäckigen Ein- und Durchschlafstörungen empfehlen Leitlinien die kognitive Verhaltenstherapie für Insomnie. Sie arbeitet unter anderem mit Schlafrhythmus, hilfreichen Gewohnheiten und dem Umgang mit nächtlichem Wachliegen. Sie kann als Einzel-, Gruppen- oder digitales Programm angeboten werden.</p>
      <aside class="article-callout article-callout--note"><h3>Wichtig zur Einordnung</h3><p>Magnesium ist kein Schlafmittel. Nahrungsergänzungsmittel können einen nachgewiesenen Mangel ausgleichen, ersetzen aber keine Abklärung anhaltender Schlafprobleme.</p></aside>
      <aside class="article-callout article-callout--warning"><h3>Wann ärztlich abklären?</h3><ul><li>Plötzliches, wiederkehrendes oder anhaltendes Herzrasen.</li><li>Herzrasen mit Brustschmerz, Atemnot oder drohender Ohnmacht – das kann ein Notfall sein.</li><li>Schlafprobleme an mindestens drei Nächten pro Woche über mehrere Monate.</li><li>Ausgeprägte Angst oder anhaltend gedrückte Stimmung.</li></ul></aside>
    `,
    sources: [
      ['S3-Leitlinie Insomnie bei Erwachsenen, AWMF 063-003', 'https://register.awmf.org/de/leitlinien/detail/063-003'],
      ['S3-Leitlinie Peri- und Postmenopause, AWMF 015-062', 'https://register.awmf.org/de/leitlinien/detail/015-062'],
      ['Herzrasen: Ursachen abklären, Deutsche Herzstiftung', 'https://herzstiftung.de/infos-zu-herzerkrankungen/herzrhythmusstoerungen/herzrasen']
    ]
  },
  {
    slug: 'menopause-gelenk-muskelschmerzen',
    category: 'Gelenke & Muskeln',
    title: 'Gelenk- und Muskelschmerzen in den Wechseljahren',
    lead: 'Morgens steife Finger, ein Ziehen in Schultern und Knien, manchmal das Gefühl, es tue „überall“ weh. Viele Frauen erleben das rund um die Wechseljahre – und sind überrascht, dass die Hormone daran beteiligt sein können.',
    minutes: 8,
    image: 'assets/menopause-article-active.png',
    alt: 'Frau räumt nach Bewegung ihre Sporttasche aus',
    intro: 'Gelenk- und Muskelschmerzen werden oft nicht mit den Wechseljahren in Verbindung gebracht. Dabei beeinflusst Östrogen nicht nur den Zyklus, sondern auch Entzündungsprozesse, Bindegewebe, Knochen und Muskeln. Trotzdem ist nicht jeder Schmerz hormonell bedingt – Warnzeichen sollten ernst genommen werden.',
    summary: [
      'Viele Frauen berichten rund um die Wechseljahre über Gelenk- oder Muskelbeschwerden.',
      'Sinkendes Östrogen kann Gelenke, Knorpel, Muskeln und Entzündungsprozesse beeinflussen.',
      'Finger, Hände, Schultern und Knie sind häufig betroffen; Steifigkeit fällt oft morgens auf.',
      'Regelmäßige Bewegung und besonders Krafttraining stärken Muskeln und Knochen.',
      'Ein heißes, deutlich geschwollenes Gelenk oder lange Morgensteifigkeit gehört ärztlich abgeklärt.'
    ],
    body: `
      <h2>Was Östrogen mit den Gelenken zu tun hat</h2>
      <p>Östrogen wirkt an vielen Stellen des Bewegungsapparats. Sinkt der Spiegel, können sich Kollagen, Knorpel, Gelenkflüssigkeit und Entzündungsbereitschaft verändern. Beschwerden sind oft diffus und können wandern. Besonders häufig werden Finger, Hände, Schultern und Knie genannt.</p>
      <aside class="article-callout article-callout--note"><h3>Wichtig zur Einordnung</h3><p>Nicht jeder Schmerz in der Lebensmitte ist hormonell bedingt. Verschleiß, entzündlich-rheumatische Erkrankungen, Verletzungen oder andere Ursachen müssen mitgedacht werden.</p></aside>
      <h3>Frozen Shoulder – die schmerzhafte Schultersteife</h3>
      <p>Eine zunehmend steife und schmerzhafte Schulter tritt besonders häufig zwischen 40 und 60 Jahren auf. Beobachtungsdaten deuten auf einen Zusammenhang mit Östrogen hin, beweisen ihn aber nicht. Anhaltende Schulterbeschwerden gehören deshalb in ärztliche oder physiotherapeutische Hände.</p>
      <h2>Knochen mitdenken</h2>
      <p>Mit dem Östrogenmangel beschleunigt sich auch der Knochenabbau. Muskeln, Gelenke und Knochen sollten deshalb zusammen betrachtet werden. Belastende Bewegung, ausreichend Eiweiß und eine bedarfsgerechte Versorgung mit Calcium und Vitamin D unterstützen den Bewegungsapparat.</p>
      <h2>Was im Alltag am meisten hilft</h2>
      <ul class="article-tip-grid">
        <li><strong>Krafttraining:</strong> Stärkere Muskeln stabilisieren Gelenke und setzen wichtige Reize für die Knochen.</li>
        <li><strong>Regelmäßige Mobilität:</strong> Sanfte Bewegung, Yoga oder Pilates können Beweglichkeit erhalten.</li>
        <li><strong>Belastung dosieren:</strong> Nicht komplett schonen, sondern schrittweise und regelmäßig aktiv bleiben.</li>
        <li><strong>Gewicht im Blick behalten:</strong> Weniger Last kann tragende Gelenke entlasten.</li>
      </ul>
      <aside class="article-callout article-callout--warning"><h3>Diese Warnzeichen gehören ärztlich abgeklärt</h3><ul><li>Ein einzelnes heißes, gerötetes oder stark geschwollenes Gelenk.</li><li>Morgensteifigkeit über 30 bis 60 Minuten, besonders bei symmetrischen Schwellungen.</li><li>Fieber, Gewichtsverlust, Taubheitsgefühle oder zunehmende Schmerzen.</li><li>Beschwerden, die nach mehreren Wochen nicht besser werden.</li></ul></aside>
    `,
    sources: [
      ['The musculoskeletal syndrome of menopause, Climacteric 2024', 'https://www.tandfonline.com/doi/full/10.1080/13697137.2024.2380363'],
      ['S3-Leitlinie Peri- und Postmenopause, AWMF 015-062', 'https://register.awmf.org/de/leitlinien/detail/015-062'],
      ['Menopause: identification and management, NICE NG23', 'https://www.nice.org.uk/guidance/ng23'],
      ['Referenzwerte Vitamin D, DGE', 'https://www.dge.de/wissenschaft/referenzwerte/vitamin-d/']
    ]
  },
  {
    slug: 'menopause-perimenopause-erste-anzeichen',
    category: 'Perimenopause',
    title: 'Perimenopause: erste Anzeichen und was hilft',
    lead: 'Die Wechseljahre kündigen sich oft leise an – mit einem Zyklus, der nicht mehr planbar ist, mit Nächten, die unruhiger werden. Hier ordnen wir die ersten Anzeichen ein und zeigen einen ruhigen ersten Schritt.',
    minutes: 7,
    image: 'assets/menopause-article-mood.png',
    alt: 'Frau betrachtet sich morgens ruhig im Spiegel',
    intro: 'Viele Frauen bemerken schon Mitte 40, dass sich etwas verändert – lange bevor das Wort Wechseljahre fällt. Diese Übergangsphase heißt Perimenopause. Sie ist keine Krankheit, verläuft aber bei jeder Frau anders und kann mehrere Lebensbereiche gleichzeitig berühren.',
    summary: [
      'Die Perimenopause beginnt oft in den mittleren bis späten Vierzigern, bei manchen Frauen früher.',
      'Das erste sichtbare Zeichen ist häufig ein veränderter oder unregelmäßiger Zyklus.',
      'Die Hormone sinken nicht gleichmäßig, sondern schwanken zunächst stark.',
      'Ab etwa 45 Jahren erfolgt die Einordnung meist über Beschwerden und Zyklusverlauf, nicht über einen einzelnen Bluttest.',
      'Bestimmte Blutungsmuster sollten immer ärztlich abgeklärt werden.'
    ],
    body: `
      <h2>Was ist die Perimenopause?</h2>
      <p>Die Perimenopause ist die Übergangszeit vor und rund um die letzte Regelblutung. Die Menopause selbst bezeichnet nur diesen letzten Blutungszeitpunkt und kann erst rückblickend bestimmt werden – nach zwölf Monaten ohne Periode. Danach beginnt die Postmenopause.</p>
      <p>Beginnt die Menopause vor dem 40. Geburtstag, spricht man von einer vorzeitigen Menopause; zwischen 40 und 44 von einer frühen Menopause. Beides sollte ärztlich begleitet werden.</p>
      <h2>Was im Körper passiert</h2>
      <p>In der frühen Perimenopause arbeiten die Eierstöcke unregelmäßiger. Progesteron sinkt häufig zuerst, während Östrogen stark schwanken kann. Das Ergebnis ist kein gleichmäßiger Abstieg, sondern ein Auf und Ab – und damit auch wechselnde Beschwerden.</p>
      <h2>Die ersten Anzeichen</h2>
      <ul class="article-tip-grid">
        <li><strong>Zyklus:</strong> kürzere, längere oder unregelmäßige Abstände; teils stärkere Blutungen.</li>
        <li><strong>Schlaf:</strong> schlechter ein- oder durchschlafen, auch ohne ausgeprägte Hitzewallungen.</li>
        <li><strong>Stimmung und Energie:</strong> Reizbarkeit, Schwankungen oder geringere Belastbarkeit.</li>
        <li><strong>Körperliche Veränderungen:</strong> Hitzewallungen, Brustspannen, Gelenkbeschwerden oder Scheidentrockenheit können hinzukommen.</li>
      </ul>
      <h2>Warum ein einzelner Bluttest selten weiterhilft</h2>
      <p>FSH und andere Hormone können in dieser Phase von Tag zu Tag stark schwanken. Deshalb wird die Perimenopause ab etwa 45 Jahren meist anhand von Beschwerden und Zyklusverlauf eingeordnet. Bei jüngeren Frauen oder besonderen Fragestellungen kann eine Laboruntersuchung sinnvoll sein – die Entscheidung trifft die Ärztin oder der Arzt.</p>
      <aside class="article-callout article-callout--warning"><h3>Diese Blutungen bitte abklären lassen</h3><ul><li>Jede Blutung nach zwölf Monaten ohne Periode.</li><li>Sehr starke oder ungewöhnlich lange Blutungen.</li><li>Blutungen zwischen den Perioden oder nach dem Geschlechtsverkehr.</li><li>Beschwerden vor dem 40. Lebensjahr, die zu einer vorzeitigen Menopause passen könnten.</li></ul></aside>
    `,
    sources: [
      ['S3-Leitlinie Peri- und Postmenopause, AWMF 015-062', 'https://register.awmf.org/de/leitlinien/detail/015-062'],
      ['Menopause: identification and management, NICE NG23', 'https://www.nice.org.uk/guidance/ng23'],
      ['Wohlbefinden in den Wechseljahren, IQWiG', 'https://www.gesundheitsinformation.de/wohlbefinden-in-den-wechseljahren.html']
    ]
  }
];

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function header() {
  return `
<header class="hd">
  <div class="hdin">
    <div class="brand"><a href="wechseljahre/" aria-label="Zur Wechseljahre-Übersicht"><img class="brandlogo" src="assets/onfy-logo-new.svg" alt="Onfy"></a></div>
    <form class="search" onsubmit="return false">
      <svg class="svgi" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
      <input aria-label="Suchen" placeholder="Medikamente und Produkte suchen">
      <button type="button" class="searchbtn">Suchen</button>
    </form>
    <nav class="hdnav" aria-label="Konto">
      <button class="hdact"><svg class="svgi" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><path d="M14 14h3v3h-3zM20 14h1M14 20h1M20 20h1"></path></svg><span>E-Rezept</span></button>
      <button class="hdact"><svg class="svgi" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg><span>Profil</span></button>
      <button class="hdlang">DE</button>
    </nav>
  </div>
</header>
<nav class="article-nav" aria-label="Sortiment">
  <div class="article-nav-inner"><a href="#">Arzneimittel</a><a href="#">Vitamine & Mineralstoffe</a><a href="#">Sport & Ernährung</a><a href="#">Schönheit & Pflege</a><a href="#">Kinder & Familie</a><a href="wechseljahre/">Gesundheitsthemen</a></div>
</nav>`;
}

function footer() {
  return `
<footer class="ft">
  <div class="ftin">
    <div class="ftgrid">
      <div><span class="wordmark dark">onfy</span><p class="ftabout">Marktplatz lizenzierter deutscher Apotheken. Verständliche Informationen und echte Apothekenpreise.</p></div>
      <div class="ftcol"><div class="fth">Onfy</div><a href="#">Über uns</a><a href="#">Karriere</a><a href="#">Presse</a></div>
      <div class="ftcol"><div class="fth">Hilfe</div><a href="#">Kontakt</a><a href="#">Versand</a><a href="#">FAQ</a></div>
      <div class="ftcol"><div class="fth">Rechtliches</div><a href="https://onfy.de/impressum" target="_blank" rel="noopener">Impressum</a><a href="https://onfy.de/datenschutz" target="_blank" rel="noopener">Datenschutz</a><a href="#">AGB</a></div>
    </div>
    <div class="ftbar"><span class="ftcopy">© 2026 Onfy · Health Hub Prototyp</span></div>
  </div>
</footer>`;
}

function render(article) {
  const summary = article.summary.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
  const sources = article.sources.map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a></li>`).join('');
  return `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <base href="/onfy-health-hubs/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <title>${escapeHtml(article.title)} · Onfy</title>
  <meta name="description" content="${escapeHtml(article.lead)}">
  <link rel="icon" type="image/png" href="assets/favicon-work.png?v=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles/onfy.css">
  <link rel="stylesheet" href="styles/vh.css">
  <link rel="stylesheet" href="styles/article.css?v=2">
</head>
<body class="article-page">
${header()}
<main>
  <section class="article-hero-stage">
    <figure class="article-hero-media"><img src="${article.image}" alt="${escapeHtml(article.alt)}"></figure>
    <div class="article-hero-wash" aria-hidden="true"></div>
    <div class="article-hero-inner">
      <div class="article-hero-copy">
        <p class="article-kicker">Artikel · ${escapeHtml(article.category)}</p>
        <h1 class="article-title">${escapeHtml(article.title)}</h1>
        <p class="article-lede">${escapeHtml(article.lead)}</p>
        <ul class="article-meta"><li>Lesezeit ca. ${article.minutes} Minuten</li><li>Aktualisiert Juni 2026</li><li>Auf Basis öffentlich zugänglicher medizinischer Leitlinien</li></ul>
      </div>
    </div>
  </section>
  <article class="article-shell">
    <div class="article-copy">
      <p>${escapeHtml(article.intro)}</p>
      <aside class="article-summary"><h2>Auf einen Blick</h2><ul>${summary}</ul></aside>
      ${article.body}
      <section class="article-next">
        <div class="article-next-copy"><p class="eyebrow">Nächster Schritt</p>
          <h2>Was belastet Sie am meisten?</h2>
          <p>Wählen Sie Ihr Symptom und vergleichen Sie rezeptfreie Mittel mit Preisen aus über 25 Apotheken.</p>
          <div class="article-symptoms"><span>Hitzewallungen & Nachtschweiß</span><span>Schlafprobleme</span><span>Stimmung & Unruhe</span><span>Trockenheit & Intimität</span><span>Zyklusveränderungen</span></div>
          <a class="article-cta" href="wechseljahre/">Produkte vergleichen →</a>
        </div>
        <div class="article-next-visual"><img src="assets/menopause-mood.png" alt=""></div>
      </section>
      <section class="article-sources"><h2>Quellen</h2><ol>${sources}</ol><p class="article-disclaimer">Allgemeine Gesundheitsinformation. Keine Diagnose, Behandlung oder medizinische Beratung. Dieser Artikel ersetzt nicht das Gespräch mit Ihrer Ärztin oder Ihrem Arzt. Bei akuten Beschwerden wenden Sie sich an Ihre behandelnde Praxis, den ärztlichen Bereitschaftsdienst (116117) oder im Notfall an 112.</p></section>
    </div>
  </article>
</main>
${footer()}
</body>
</html>`;
}

for (const article of articles) {
  const dir = path.join(repoRoot, 'blog', article.slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), render(article));
}

console.log(`Generated ${articles.length} menopause article pages.`);
