# Filmwaker Website — Session Transcript
# Data: Marzo 2026
# Usa questo file in una nuova chat per riprendere il lavoro

## PROGETTO
Sito statico per Filmwaker studio — hosted su SiteGround (filmwaker.it)
Repository GitHub: https://github.com/Filmwaker/Filmwaker-Website.git (branch: main)
Cartella locale: C:\Users\FilmWaker\Desktop\SitoFilmWaker
Deploy via FileZilla FTP → public_html/ su SiteGround (host: ftp.filmwaker.it porta 21)

---

## STRUTTURA FILE
```
SitoFilmWaker/
├── index.html              ← Homepage
├── styles.css              ← CSS globale
├── script.js               ← JS principale (carousel brand, FAQ, etc.)
├── Logo.webp               ← Logo (L maiuscola — case sensitive su Linux)
├── mission-image.webp
├── fIlmwaker-produzione-video2.mp4  ← Video hero (I maiuscola nel nome)
├── brandimages/            ← Loghi clienti (10 file .webp)
├── courseimages/           ← Immagini corsi
├── favicons/
├── academypage/
│   ├── academy.html
│   └── academy-styles.css
├── coursepage/
│   ├── courses.html
│   └── courses-styles.css
├── portfoliopage/
│   ├── portfolio.html
│   ├── portfolio-styles.css
│   └── portfolio-script.js
├── teampage/
│   ├── team.html
│   ├── team-styles.css
│   ├── team-script.js
│   └── teamimages/
├── i18n/
│   └── i18n.js             ← UNICA fonte di testo — dizionari IT+EN inline (NO fetch JSON)
└── .htaccess               ← Redirect non-www → www + HTTPS
```

---

## SISTEMA i18n
**IMPORTANTE:** Il sito usa dizionari INLINE in `i18n/i18n.js` — NON legge i file JSON.
I file `it.json` e `en.json` esistono ma sono ignorati dal motore.
Ogni modifica testuale va fatta SOLO in `i18n/i18n.js` nella sezione `const _dict = { it: {...}, en: {...} }`.
Attributo HTML: `data-i18n="chiave.subchiave"` per testo plain, `data-i18n-html="chiave"` per HTML con tag.
Switcher: `FW_I18N.switchTo('it'|'en')` — salva in localStorage.

---

## .HTACCESS (stato attuale)
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
RewriteCond %{HTTP_HOST} ^filmwaker\.it$ [NC]
RewriteRule ^(.*)$ https://www.filmwaker.it/$1 [R=301,L]
DirectoryIndex index.html
```

---

## TEAM (6 persone)
1. **Alessandro Caccavale** — 3D Supervisor & Animator — @thefilmwaker
2. **Edoardo Di Savina** — Tech Artist & Unreal Specialist — @jackthelightning
3. **Giorgio Castagnetta** — VFX Supervisor & Compositor — @master.cast
4. **Edoardo Amati** — Filmmaker & Director — @edoardo__amati (doppio underscore) — foto: edoardoamati.png
5. **Alessandro Barbaro** — Social Media Manager — @call.me.chad — placeholder (foto non ancora implementata)
6. **Fabrizio Pasini** — Programmatore & Docente — placeholder — foto: fabriziopasini.png

Foto in: `teampage/teamimages/`
Quando arriva foto di Barbaro: sostituire `<div class="team-placeholder-img">` con `<img src="teamimages/NOMEFILE.webp">`

---

## ACADEMY (2 corsi attivi)
1. **Game Development Fundamentals** — Blueprint + C++ in UE5 — docente: Fabrizio Pasini
2. **Unreal Engine 5 — Fondamenta** — editor, lighting, Metahuman, Sequencer, cinematica — docente: Edoardo Di Savina
⚠️ Virtual Production Pro NON ESISTE — rimosso ovunque
Sezione testimonials RIMOSSA (nessuno studente ancora)
Stats bar: 2 corsi, videocall, YouTube gratuito, supporto diretto

---

## PORTFOLIO (5 progetti)

### P1 — Death Stranding 2: On The Beach — Fan Film
- Categoria: `vfx`
- Video YouTube: MpuCteZkey4
- Cast: Jessica Armanetti (@misshatred) come Higgs, Fabio Meschini (@droid.rust) come Sam
- Hideo Kojima (@hidekojima_en) ha visto e ricondiviso il video
- Tecnologia: green screen, camera tracking, UE5, compositing
- 10 giorni di produzione

### P2 — Metal Gear Solid 2 — Opening Remake
- Categoria: `cgi`
- Video YouTube: x8jp9q4_BBo
- Snake come Metahuman custom, shot-per-shot dell'opening di MGS2
- USS Discovery sotto la pioggia, Lumen, materiali bagnati

### P3 — Metal Gear Solid 2 — Behind The Scenes
- Categoria: `documentary`
- Video YouTube: EGciy4S_5Zk
- Ideato e realizzato da JackTheLightning (@JacktheLightning su YouTube)

### P4 — Hideo Kojima Reagisce ad un Nostro Video
- Categoria: `documentary`
- Video YouTube: uh-zKcYvOCU
- Lucca Comics 2025, corto su Death Stranding, CGI+VFX+cosplay
- ⚠️ Thumbnail placeholder da YouTube — a breve arriva thumbnail custom

### P5 — Metal Gear Solid 4: Guns of the Patriots — UE5
- Categoria: `cgi`
- Video YouTube: Ydy_Gdnfv4U
- Cutscene ORIGINALE (non remake) basata su gameplay dell'ultimo capitolo
- Mocap suit, pipeline ibrido Lumen+Path Tracing, VCAM
- Montaggio su Free Bird di Lynyrd Skynyrd

**Filtri portfolio:** Tutto / VFX & Virtual / CGI & Unreal / Documentary

---

## BRAND CAROUSEL (homepage)
File in `brandimages/` — carousel infinito con link cliccabili:
- doom.webp → https://www.doom-entertainment.com
- flixbus.webp → https://www.flixbus.it
- ivgo.webp → https://www.italianvideogameorchestra.com
- LOGO ITALPOL.webp → https://www.italpol.it
- medical.webp → # (link mancante — da aggiungere)
- muschioselvaggio.webp → https://www.youtube.com/@MuschioSelvaggio
- pulppodcast.webp → https://www.youtube.com/@Pulp_podcast
- ringo.webp → https://www.ringo.it
- streamicon.webp → # (link mancante — da aggiungere)
- webstarchannel.webp → https://www.linkedin.com/company/web-stars-channel/

---

## ULTIME MODIFICHE FATTE (commit recenti)
- fbcfb3b — MGS4 descrizione corretta (mocap, Lumen+PathTracing, VCAM)
- ea94e5a — portfolio riscritto pulito, P5 MGS4 aggiunto
- 0af37c4 — P4 Kojima Reagisce aggiunto
- 4ad6ab1 — i18n.js riscritto pulito, courses.html 2 corsi, index.html VP rimosso
- 3818642 — rimossa statistica 500+ studenti academy

---

## COSE PENDENTI
1. **Foto Alessandro Barbaro** — quando disponibile, aggiungere in teamimages/ e aggiornare team.html
2. **Thumbnail P4** (Kojima Reagisce) — a breve arriva, sostituire img YouTube con file locale
3. **Link Medical** — trovare sito e aggiornare script.js
4. **Link Streamicon** — trovare sito e aggiornare script.js
5. **Upload SiteGround** — dopo ogni modifica caricare i file via FileZilla

---

## WORKFLOW STANDARD
1. Modifica file locale
2. `git add -A && git commit -m "..." && git push`
3. Caricare i file modificati su SiteGround via FileZilla

**File più frequentemente modificati:**
- `i18n/i18n.js` — tutti i testi IT+EN
- `portfoliopage/portfolio.html` — progetti portfolio
- `teampage/team.html` — membri team
- `academypage/academy.html` — pagina academy
- `coursepage/courses.html` — pagina corsi
- `index.html` — homepage
- `script.js` — carousel brand e JS generale
