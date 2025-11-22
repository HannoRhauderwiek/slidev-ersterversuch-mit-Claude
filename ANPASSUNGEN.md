# Anleitung zur Anpassung der Vorlage

Diese Anleitung zeigt Ihnen, wie Sie die Slidev KI-Schulungen Vorlage an Ihre Bedürfnisse anpassen können.

## 🎨 Design-Anpassungen

### 1. Farben ändern

**Datei:** `config/design-system.ts`

```typescript
export const designSystem = {
  colors: {
    primary: '#007AFF',      // ← Ihre Hauptfarbe hier
    secondary: '#5856D6',    // ← Ihre Sekundärfarbe hier
    accent: '#FF9500',       // ← Akzentfarbe
    
    // Semantische Farben
    success: '#34C759',      // Grün
    error: '#FF3B30',        // Rot
    warning: '#FF9500',      // Orange
  }
}
```

**Auch in:** `styles/global.css`
```css
:root {
  --color-primary: #007AFF;
  --color-secondary: #5856D6;
  /* Ändern Sie diese Werte */
}
```

### 2. Schriftarten ändern

**Datei:** `config/design-system.ts`

```typescript
typography: {
  fontFamily: {
    sans: 'Ihre-Schriftart, sans-serif',
    mono: 'Ihr-Mono-Font, monospace',
  }
}
```

**Google Fonts einbinden:**

**Datei:** `styles/global.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

:root {
  --font-sans: 'Roboto', sans-serif;
}
```

### 3. Spacing anpassen

**Datei:** `config/design-system.ts`

```typescript
spacing: {
  1: '0.5rem',   // 8px
  2: '1rem',     // 16px - Ändern Sie diese Werte
  3: '1.5rem',   // 24px
  // ...
}
```

### 4. Animationsgeschwindigkeit

**Datei:** `config/design-system.ts`

```typescript
animations: {
  duration: {
    fast: '150ms',    // Schnell
    normal: '250ms',  // Normal - Empfohlen
    slow: '350ms',    // Langsam
  }
}
```

## 🔧 Komponenten-Anpassungen

### Neue Komponente erstellen

1. **Erstellen Sie eine neue Datei** in `/components`:

```vue
<!-- components/MeineKomponente.vue -->
<script setup lang="ts">
interface Props {
  titel: string
  inhalt: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="meine-komponente">
    <h2>{{ titel }}</h2>
    <p>{{ inhalt }}</p>
  </div>
</template>

<style scoped>
.meine-komponente {
  padding: var(--spacing-4);
  background: var(--color-surface);
  border-radius: 1rem;
}
</style>
```

2. **Verwenden Sie sie in slides.md**:

```markdown
---
# Meine Folie

<MeineKomponente 
  titel="Hallo" 
  inhalt="Das ist meine Komponente" 
/>
```

### Bestehende Komponente anpassen

**Beispiel: ContentSlide anpassen**

**Datei:** `components/ContentSlide.vue`

```vue
<!-- Ändern Sie die Styles -->
<style scoped>
.slide-title {
  font-size: 3rem;        /* Größer */
  color: #FF0000;         /* Andere Farbe */
  text-align: center;     /* Zentriert */
}
</style>
```

## 📄 Layout-Anpassungen

### Neues Layout erstellen

1. **Erstellen Sie** `/layouts/mein-layout.vue`:

```vue
<template>
  <div class="mein-layout">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.mein-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
```

2. **Verwenden Sie es**:

```markdown
---
layout: mein-layout
---

::header::
# Kopfzeile

::default::
Hauptinhalt

::footer::
Fußzeile
```

## 🎬 Animations-Anpassungen

### Custom Transitions

**Erstellen Sie** `styles/transitions.css`:

```css
/* Slide-in von links */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-in-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
```

**Verwenden Sie es in Komponenten**:

```vue
<Transition name="slide-in">
  <div v-if="show">Inhalt</div>
</Transition>
```

## 📝 Slidev Config Anpassungen

**Datei:** `slidev.config.ts`

```typescript
export default defineConfig({
  // Title
  title: 'Ihr Firmenname - Schulung',
  
  // Theme
  theme: 'default', // oder ein Custom Theme
  
  // Aspect Ratio
  aspectRatio: '16/9', // oder '4/3'
  
  // Canvas Größe
  canvasWidth: 980,
  
  // Highlight Theme
  highlighter: 'shiki',
  
  // Export-Einstellungen
  export: {
    format: 'pdf',
    dark: false,
    withClicks: true,
  },
  
  // Zeichnen aktivieren
  drawings: {
    enabled: true,
    persist: false,
  },
})
```

## 🖼️ Logo und Branding

### Firmenlogo hinzufügen

1. **Legen Sie Ihr Logo ab** in `/public/logo.png`

2. **Erstellen Sie ein globales Layout**:

**Datei:** `global-top.vue`

```vue
<template>
  <div class="global-header">
    <img src="/logo.png" alt="Logo" class="logo" />
  </div>
</template>

<style scoped>
.global-header {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
}

.logo {
  height: 40px;
}
</style>
```

### Fußzeile mit Firmennamen

**Datei:** `global-bottom.vue`

```vue
<template>
  <div class="global-footer">
    <span>© 2024 Ihr Firmenname</span>
  </div>
</template>

<style scoped>
.global-footer {
  position: fixed;
  bottom: 20px;
  left: 20px;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
</style>
```

## 🎯 Theme-Anpassungen

### Eigenes Theme erstellen

1. **Erstellen Sie** `/theme/index.ts`:

```typescript
export default {
  name: 'mein-theme',
  colorSchema: 'light',
}
```

2. **Ändern Sie** `slidev.config.ts`:

```typescript
export default defineConfig({
  theme: './theme',
})
```

## 📊 Diagramm-Styles

### Mermaid Themes

**In Frontmatter:**

```yaml
---
mermaid:
  theme: 'default' # oder 'dark', 'forest', 'neutral'
---
```

## ⚙️ Weitere Anpassungen

### Code-Block Themes

**Datei:** `slidev.config.ts`

```typescript
shikiSetup: {
  theme: {
    dark: 'github-dark',
    light: 'github-light', 
    // Oder: 'monokai', 'nord', 'dracula'
  },
}
```

### Monaco Editor

```typescript
monaco: 'dev', // oder 'build' für Production
```

## 🔄 Best Practices

1. **Backup erstellen** vor größeren Änderungen
2. **Testen Sie** nach jeder Änderung mit `npm run dev`
3. **Dokumentieren Sie** Ihre Anpassungen
4. **Versionskontrolle** nutzen (Git)
5. **Komponenten wiederverwenden** statt duplizieren

## 🐛 Häufige Probleme

### Farben werden nicht angewendet
- Prüfen Sie CSS-Variablen in `global.css`
- Stellen Sie sicher, dass Design-System importiert ist
- Cache löschen und neu starten

### Komponente nicht gefunden
- Dateiname muss PascalCase sein
- Muss in `/components` liegen
- Server neu starten

### Styles funktionieren nicht
- `<style scoped>` für lokale Styles
- Globale Styles in `global.css`
- CSS-Variablen nutzen für Konsistenz

## 📚 Weitere Ressourcen

- [Slidev Theme Guide](https://sli.dev/themes/use)
- [Vue 3 Components](https://vuejs.org/guide/components/)
- [UnoCSS Documentation](https://unocss.dev)

---

**Viel Erfolg beim Anpassen! 🎨**
