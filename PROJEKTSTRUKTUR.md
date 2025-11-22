# 📁 Projektstruktur Übersicht

Detaillierte Erklärung aller Dateien und Ordner im Projekt.

## 📂 Hauptordner

```
slidev-ki-schulung/
├── components/          # Vue-Komponenten
├── pages/              # Zusätzliche Seiten
├── snippets/           # Code-Snippets
├── layouts/            # Custom Layouts (optional)
├── styles/             # Globale Styles
├── config/             # Konfigurationsdateien
├── setup/              # Setup-Skripte
├── public/             # Statische Assets
├── slides.md           # Hauptpräsentation
├── package.json        # Dependencies
└── Konfigurationsdateien
```

## 🔧 Konfigurationsdateien

### `package.json`
**Zweck:** Node.js Dependencies und Scripts

**Wichtige Scripts:**
- `dev` - Entwicklungsserver
- `build` - Production Build
- `export-pdf` - PDF Export

**Ändern wenn:**
- Neue Dependencies benötigt werden
- Custom Scripts hinzugefügt werden

---

### `slidev.config.ts`
**Zweck:** Slidev-spezifische Konfiguration

**Enthält:**
- Theme-Einstellungen
- Font-Konfiguration
- Export-Optionen
- Highlighter-Setup

**Ändern für:**
- Theme wechseln
- Export-Einstellungen anpassen
- Features aktivieren/deaktivieren

---

### `tsconfig.json`
**Zweck:** TypeScript Kompiler-Optionen

**Normalerweise NICHT ändern**
Nur bei spezifischen TypeScript-Anforderungen.

---

### `uno.config.ts`
**Zweck:** UnoCSS (Utility-First CSS) Konfiguration

**Enthält:**
- Shortcuts für häufige Styles
- Theme-Farben
- Icon-Einstellungen

**Ändern für:**
- Custom CSS-Utilities
- Neue Shortcuts definieren

---

### `vite.config.ts`
**Zweck:** Vite Build-Tool Konfiguration

**Enthält:**
- Server-Einstellungen
- Build-Optionen
- Alias-Definitionen

**Ändern für:**
- Port ändern
- Build-Optimierungen

---

### `.gitignore`
**Zweck:** Git Ignore-Regeln

**Schützt:**
- node_modules/
- Build-Outputs
- Temporäre Dateien

**Normalerweise NICHT ändern**

---

## 📄 Dokumentation

### `README.md`
**Zweck:** Hauptdokumentation

**Enthält:**
- Projektübersicht
- Installation
- Alle Features
- Verwendungsbeispiele
- Best Practices

**Ihre zentrale Referenz!**

---

### `QUICKSTART.md`
**Zweck:** Schnelleinstieg in 5 Minuten

**Enthält:**
- Installation
- Erste Schritte
- Häufige Befehle
- Troubleshooting

**Start hier für neue Nutzer!**

---

### `ANPASSUNGEN.md`
**Zweck:** Anleitung für Anpassungen

**Enthält:**
- Design-Änderungen
- Komponenten-Anpassungen
- Layout-Erstellung
- Branding

**Nutzen wenn:** Sie die Vorlage anpassen möchten

---

### `PROJEKTSTRUKTUR.md` (diese Datei)
**Zweck:** Erklärung aller Dateien

---

## 📝 Präsentationsdateien

### `slides.md`
**Zweck:** Hauptpräsentationsdatei

**Enthält:**
- Frontmatter (Metadaten)
- Alle Folien
- Beispiele für jeden Folientyp

**Dies ist Ihre Arbeitsdatei!**

**Struktur:**
```markdown
---
# Frontmatter: Globale Einstellungen
title: Titel
theme: default
---

# Erste Folie

---

# Zweite Folie
```

---

## 🎨 Components (Komponenten)

### `components/Counter.vue`
**Zweck:** Beispiel-Counter-Komponente

**Verwendung:**
```markdown
<Counter :count="10" />
```

---

### `components/ContentSlide.vue`
**Zweck:** Bullet-Points mit Icons

**Props:**
- `title` - Folientitel
- `items` - Array von Items
- `animated` - Animation an/aus

**Verwendung:**
```markdown
<ContentSlide
  title="Titel"
  :items="[{icon: '🎯', text: 'Punkt'}]"
/>
```

---

### `components/ComparisonSlide.vue`
**Zweck:** 2-Spalten Vergleich

**Props:**
- `title` - Haupttitel
- `leftTitle` / `rightTitle` - Spaltentitel
- `leftItems` / `rightItems` - Items mit positive/negative

**Verwendung:**
```markdown
<ComparisonSlide
  title="Vergleich"
  leftTitle="A"
  rightTitle="B"
  :leftItems="[{text: 'Gut', positive: true}]"
/>
```

---

### `components/AccordionSlide.vue`
**Zweck:** Aufklappbare Kategorien

**Props:**
- `title` - Folientitel
- `items` - Array mit title, content, icon
- `allowMultiple` - Mehrere gleichzeitig offen

**Verwendung:**
```markdown
<AccordionSlide
  title="Themen"
  :items="[{title: 'A', content: '...', icon: '🎯'}]"
/>
```

---

### `components/QuizSlide.vue`
**Zweck:** Interaktives Quiz

**Props:**
- `question` - Frage
- `options` - Array mit Antworten
- `hint` - Optionaler Hinweis

**Verwendung:**
```markdown
<QuizSlide
  question="Frage?"
  :options="[{text: 'A', isCorrect: true, explanation: '...'}]"
/>
```

---

### `components/BranchSlide.vue`
**Zweck:** Fallunterscheidungen/Entscheidungsbäume

**Props:**
- `title` - Titel
- `centralQuestion` - Zentrale Frage
- `branches` - Array mit Szenarien

**Verwendung:**
```markdown
<BranchSlide
  centralQuestion="Was wählen?"
  :branches="[{condition: 'A', result: 'Dann B'}]"
/>
```

---

### `components/CodeExampleSlide.vue`
**Zweck:** Code mit Erklärung

**Props:**
- `title` - Titel
- `language` - Programmiersprache
- `code` - Code-String
- `explanation` - Erklärung

**Verwendung:**
```markdown
<CodeExampleSlide
  title="Python"
  language="python"
  :code="`print('Hello')`"
  explanation="Gibt Hello aus"
/>
```

---

### `components/WebEmbedSlide.vue`
**Zweck:** Webseiten einbetten

**Props:**
- `title` - Titel
- `url` - URL
- `height` - Höhe (z.B. "600px")
- `allowInput` - URL-Eingabe erlauben

**Verwendung:**
```markdown
<WebEmbedSlide
  title="Demo"
  url="https://example.com"
  height="500px"
/>
```

---

## 📁 Pages

### `pages/multiple-entries.md`
**Zweck:** Beispiel für Multi-File-Präsentationen

**Verwendung:**
```markdown
---
src: ./pages/multiple-entries.md
---
```

Dadurch wird diese Seite in die Hauptpräsentation eingebunden.

---

## 📦 Snippets

### `snippets/external.ts`
**Zweck:** Externe TypeScript-Code-Snippets

**Verwendung:**
```markdown
<<< @/snippets/external.ts#snippet
```

Bindet Code-Snippets mit Syntax-Highlighting ein.

---

## 🎨 Styles

### `styles/global.css`
**Zweck:** Globale CSS-Styles

**Enthält:**
- CSS-Variablen
- Reset/Base Styles
- Utility Classes
- Custom Scrollbar

**Auto-geladen:** Wird automatisch eingebunden

**Ändern für:**
- Globale Design-Änderungen
- Neue Utility-Classes
- Custom Styles

---

## ⚙️ Config

### `config/design-system.ts`
**Zweck:** Zentrales Design-System

**Enthält:**
- Farben
- Typografie
- Spacing
- Animationen
- Shadows

**Ihr Design-Hub:**
Alle Design-Tokens an einem Ort!

**Ändern für:**
- Farben anpassen
- Schriften ändern
- Spacing-System modifizieren

---

## 🔧 Setup

### `setup/main.ts`
**Zweck:** Vue App Setup

**Verwendet für:**
- Globale Plugins
- Router Guards
- App-Konfiguration

**Ändern wenn:**
- Plugins hinzufügen
- Globale Properties definieren
- App initialisieren

---

## 📂 Public

**Zweck:** Statische Assets

**Beispiele:**
- Logo: `public/logo.png`
- Bilder: `public/images/`
- Fonts: `public/fonts/`

**Zugriff:**
```markdown
![Logo](/logo.png)
```

(Ohne `public/` Präfix!)

---

## 📦 Optionale Ordner

### `layouts/` (Optional)
**Erstellen für:** Custom Layouts

**Beispiel:**
```vue
<!-- layouts/my-layout.vue -->
<template>
  <div class="my-layout">
    <slot />
  </div>
</template>
```

---

## 🗂️ Generierte Ordner

### `node_modules/`
**Zweck:** Dependencies

**NIEMALS ÄNDERN** - wird von npm verwaltet

---

### `.slidev/`
**Zweck:** Slidev Cache

**Kann gelöscht werden** bei Problemen

---

### `dist/`
**Zweck:** Build-Output

**Wird erstellt bei:** `npm run build`

**Enthält:** Statische Website

---

## 🎯 Welche Dateien ändern?

### 🟢 Häufig ändern:

- ✅ `slides.md` - Ihre Präsentation
- ✅ `components/*.vue` - Komponenten anpassen
- ✅ `config/design-system.ts` - Design ändern
- ✅ `styles/global.css` - Styles anpassen

### 🟡 Manchmal ändern:

- ⚠️ `slidev.config.ts` - Slidev-Einstellungen
- ⚠️ `package.json` - Dependencies
- ⚠️ `uno.config.ts` - CSS-Utilities

### 🔴 Selten ändern:

- ❌ `tsconfig.json` - Nur bei TS-Problemen
- ❌ `vite.config.ts` - Nur bei Build-Problemen
- ❌ `.gitignore` - Normalerweise fertig

### ⛔ NIEMALS ändern:

- 🚫 `node_modules/` - Verwaltet von npm
- 🚫 `.slidev/` - Cache (kann gelöscht werden)

---

## 📚 Zusammenfassung

```
Arbeiten mit:
├── slides.md           ← Ihre Folien
├── components/         ← Komponenten nutzen/anpassen
├── config/            ← Design-System
└── styles/            ← Globale Styles

Konfigurieren:
├── slidev.config.ts   ← Slidev-Optionen
├── package.json       ← Dependencies
└── uno.config.ts      ← CSS-Framework

Dokumentation:
├── README.md          ← Vollständige Docs
├── QUICKSTART.md      ← Schnelleinstieg
└── ANPASSUNGEN.md     ← Customization Guide
```

---

**Bei Fragen:** Siehe README.md für ausführliche Infos zu jedem Feature!
