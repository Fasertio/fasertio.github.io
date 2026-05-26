# NEXUS — Tech & Digital Futures Blog

Blog personale single-page costruito con **Astro** e **Decap CMS**, deployato su **GitHub Pages**.

## Stack

- 🚀 [Astro](https://astro.build) — framework per siti statici
- 📝 [Decap CMS](https://decapcms.org) — headless CMS Git-based
- 🎨 Design minimal futuristico con CSS custom
- 📡 RSS feed integrato
- ⚡ GitHub Actions per il deploy automatico

## Setup iniziale

### 1. Clona e configura

```bash
git clone https://github.com/yourusername/yourusername.github.io
cd yourusername.github.io
npm install
```

### 2. Configura Astro

In `astro.config.mjs` imposta il tuo sito:
```js
site: 'https://yourusername.github.io',
```

### 3. Configura Decap CMS

In `public/admin/config.yml` aggiorna:
```yaml
backend:
  repo: yourusername/yourusername.github.io
```

### 4. Abilita GitHub Pages

Nel repository GitHub:
- **Settings → Pages → Source**: seleziona `GitHub Actions`
- **Settings → Actions → General**: abilita i workflow

### 5. Autenticazione CMS (scegli un metodo)

#### Opzione A — Sveltia CMS Auth (consigliata, gratuita)
Segui le istruzioni su [sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) per deployare il Cloudflare Worker, poi aggiorna `base_url` in `config.yml`.

#### Opzione B — Netlify Identity (se usi Netlify)
Aggiungi lo snippet nel `<head>` dell'index e abilita Netlify Identity nel dashboard.

## Sviluppo locale

```bash
npm run dev        # avvia il dev server su http://localhost:4321
npm run build      # build di produzione
npm run preview    # preview della build
```

## Scrivere articoli

### Via CMS
Vai su `https://yourusername.github.io/admin/` e accedi con le credenziali GitHub.

### Via file Markdown
Crea un file in `src/content/posts/nome-articolo.md`:

```markdown
---
title: "Il titolo dell'articolo"
description: "Breve descrizione"
pubDate: "2025-02-01"
category: "cybersecurity" # tech | cybersecurity | ai | domotica
tags: ["tag1", "tag2"]
featured: false
---

Contenuto in Markdown...
```

## Struttura del progetto

```
/
├── .github/workflows/deploy.yml   # CI/CD GitHub Actions
├── public/
│   ├── admin/
│   │   ├── index.html             # Decap CMS UI
│   │   └── config.yml             # Configurazione CMS
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── PostCard.astro
│   ├── content/
│   │   ├── config.ts              # Schema collezioni
│   │   └── posts/                 # Articoli Markdown
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro            # Homepage (single page)
│   │   ├── posts/[slug].astro     # Pagine articoli
│   │   └── rss.xml.ts             # RSS feed
│   └── styles/
│       └── global.css
└── astro.config.mjs
```

## Personalizzazione

- **Colori**: modifica le variabili CSS in `src/styles/global.css`
- **Tipografia**: cambia i font Google Fonts nel CSS
- **About**: aggiorna il testo nella sezione `#about` in `src/pages/index.astro`
- **Social links**: modifica i link nel `Footer.astro`
