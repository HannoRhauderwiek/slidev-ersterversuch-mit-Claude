# Slidev KI-Schulungen Template 🎓

Professionelle, wiederverwendbare Präsentationsvorlage für KI-Schulungen in der Erwachsenenbildung mit Apple-inspirierter Ästhetik.

## 🎨 Features

- **Apple-Ästhetik**: Minimalistisches, professionelles Design
- **12+ Folientypen**: Von Content-Slides bis interaktiven Quiz
- **Moderne Animationen**: Subtil und professionell (< 300ms)
- **Responsive**: Funktioniert auf allen Bildschirmgrößen
- **Export-Optionen**: PDF, HTML, PPTX, PNG
- **Dark Mode Ready**: Optional aktivierbar
- **Voll konfigurierbar**: Zentrales Design-System

## 📁 Projektstruktur

```
slidev-ki-schulung/
├── components/           # Vue-Komponenten für Folientypen
│   ├── Counter.vue
│   ├── ContentSlide.vue
│   ├── ComparisonSlide.vue
│   ├── AccordionSlide.vue
│   ├── QuizSlide.vue
│   ├── BranchSlide.vue
│   ├── CodeExampleSlide.vue
│   └── WebEmbedSlide.vue
├── pages/               # Zusätzliche Seiten
│   └── multiple-entries.md
├── snippets/            # Code-Snippets
│   └── external.ts
├── styles/              # Globale Styles
│   └── global.css
├── config/              # Konfigurationen
│   └── design-system.ts
├── public/              # Statische Assets
├── slides.md            # Haupt-Präsentationsdatei
├── slidev.config.ts     # Slidev-Konfiguration
└── package.json         # Dependencies
```

## 🚀 Schnellstart

### 1. Installation

```bash
# Dependencies installieren
npm install

# Oder mit pnpm
pnpm install
```

### 2. Entwicklung starten

```bash
# Entwicklungsserver starten
npm run dev

# Präsentation läuft auf http://localhost:3030
```

### 3. Export

```bash
# Als PDF exportieren
npm run export-pdf

# Als HTML exportieren (standalone)
npm run build

# Als PPTX exportieren
npm run export-pptx

# Als PNG-Bilder exportieren
npm run export-png
```

## 📚 Verfügbare Folientypen

### 1. **Content Slide** - Bullet-Points mit Icons
```vue
<ContentSlide
  title="Ihr Titel"
  :animated="true"
  :items="[
    { icon: '🎯', text: 'Punkt 1' },
    { icon: '⚡', text: 'Punkt 2' }
  ]"
/>
```

### 2. **Comparison Slide** - Zweispalten-Vergleich
```vue
<ComparisonSlide
  title="Vergleich"
  leftTitle="Option A"
  rightTitle="Option B"
  :leftItems="[
    { text: 'Positiver Punkt', positive: true },
    { text: 'Negativer Punkt', positive: false }
  ]"
  :rightItems="[...]"
/>
```

### 3. **Accordion Slide** - Aufklappbare Kategorien
```vue
<AccordionSlide
  title="Themenübersicht"
  :allowMultiple="false"
  :items="[
    { title: 'Kategorie 1', icon: '🤖', content: 'Details...' }
  ]"
/>
```

### 4. **Quiz Slide** - Interaktives Quiz
```vue
<QuizSlide
  question="Ihre Frage?"
  hint="Optionaler Hinweis"
  :options="[
    { text: 'Antwort A', isCorrect: false, explanation: '...' },
    { text: 'Antwort B', isCorrect: true, explanation: '...' }
  ]"
/>
```

### 5. **Branch Slide** - Fallunterscheidungen
```vue
<BranchSlide
  title="Entscheidungsbaum"
  centralQuestion="Welches Problem?"
  :branches="[
    { condition: 'Fall A', icon: '💬', result: 'Lösung A' }
  ]"
/>
```

### 6. **Code Example Slide** - Code mit Erklärung
```vue
<CodeExampleSlide
  title="Python Beispiel"
  language="python"
  explanation="Erklärung des Codes"
  :code="`print('Hello World')`"
/>
```

### 7. **Web Embed Slide** - Webseiten einbetten
```vue
<WebEmbedSlide
  title="Live Demo"
  url="https://example.com"
  height="600px"
  :allowInput="true"
/>
```

## 🎨 Design-System anpassen

### Farben ändern

Bearbeiten Sie `config/design-system.ts`:

```typescript
colors: {
  primary: '#007AFF',      // Ihre Hauptfarbe
  secondary: '#5856D6',    // Ihre Sekundärfarbe
  accent: '#FF9500',       // Akzentfarbe
  success: '#34C759',      // Erfolgs-Farbe
  error: '#FF3B30',        // Fehler-Farbe
}
```

### Schriftarten ändern

In `config/design-system.ts`:

```typescript
typography: {
  fontFamily: {
    sans: 'Ihre-Schriftart, sans-serif',
    mono: 'Ihr-Mono-Font, monospace',
  }
}
```

### Globale Styles

Bearbeiten Sie `styles/global.css` für benutzerdefinierte CSS-Regeln.

## 📝 Neue Präsentation erstellen

1. **Kopieren Sie `slides.md`** als Vorlage
2. **Bearbeiten Sie den Frontmatter**:
```yaml
---
title: Ihr Präsentationstitel
info: Beschreibung
class: text-center
---
```
3. **Fügen Sie Ihre Folien hinzu**
4. **Nutzen Sie die Komponenten** aus dem `/components` Ordner

## 🎯 Best Practices

### Animationen
- Verwenden Sie `v-click` für stufenweises Erscheinen
- Halten Sie Animationen < 300ms
- Nutzen Sie `v-clicks` für Listen

### Code-Highlighting
```typescript {all|2|4-6|all}
// Zeilen-Highlighting
const example = "code"
```

### Layouts
- `layout: center` - Zentrierter Inhalt
- `layout: two-cols` - Zwei Spalten
- `layout: image-right` - Text + Bild
- `layout: quote` - Zitat-Folie
- `layout: section` - Section-Divider

### Markdown-Erweiterungen
- **Mermaid**: Diagramme mit \`\`\`mermaid
- **Math**: LaTeX mit `$...$` oder `$$...$$`
- **Shiki Magic Move**: Code-Transformationen

## 🔧 Erweiterte Konfiguration

### Slidev Config (`slidev.config.ts`)

```typescript
export default defineConfig({
  // Theme
  theme: 'default',
  
  // Export-Einstellungen
  export: {
    format: 'pdf',
    dark: false,
  },
  
  // Drawings aktivieren
  drawings: {
    enabled: true,
  },
})
```

### Custom Layouts

Erstellen Sie neue Layouts in `/layouts`:

```vue
<!-- layouts/my-layout.vue -->
<template>
  <div class="my-layout">
    <slot />
  </div>
</template>
```

Verwendung:
```markdown
---
layout: my-layout
---
# Ihre Folie
```

## 📤 Export-Optionen

### PDF Export
```bash
npm run export-pdf
# Ausgabe: slides-export.pdf
```

### HTML Export (Standalone)
```bash
npm run build
# Ausgabe: dist/ Ordner
# Kann ohne Server geöffnet werden
```

### PPTX Export
```bash
npm run export-pptx
# Ausgabe: slides-export.pptx
```

## 🎓 Typische Use Cases

### 1. KI-Grundlagen Schulung
- Content Slides für Konzepte
- Quiz Slides für Wissenskontrolle
- Code Examples für praktische Demos

### 2. Tool-Training
- Comparison Slides für Feature-Vergleiche
- Branch Slides für Decision Trees
- Web Embed für Live-Demos

### 3. Workshop-Präsentationen
- Accordion Slides für umfangreiche Themen
- Interactive Quizzes für Engagement
- Code Slides für Hands-on

## 🐛 Troubleshooting

### Port bereits belegt
```bash
# Anderen Port verwenden
slidev --port 3031
```

### Komponenten werden nicht gefunden
- Prüfen Sie, ob Dateien in `/components` liegen
- Neustart des Dev-Servers

### Export schlägt fehl
```bash
# Playwright installieren (für PDF-Export)
npx playwright install chromium
```

## 📖 Ressourcen

- [Slidev Dokumentation](https://sli.dev)
- [Vue 3 Dokumentation](https://vuejs.org)
- [Markdown Guide](https://www.markdownguide.org)
- [Mermaid Diagramme](https://mermaid.js.org)

## 📄 Lizenz

MIT License - Frei verwendbar für Ihre KI-Schulungen!

## 🤝 Mitwirken

Verbesserungsvorschläge und Contributions sind willkommen!

1. Fork das Repository
2. Erstellen Sie einen Feature Branch
3. Commit Ihre Änderungen
4. Push zum Branch
5. Öffnen Sie einen Pull Request

---

**Viel Erfolg bei Ihren KI-Schulungen! 🚀**
