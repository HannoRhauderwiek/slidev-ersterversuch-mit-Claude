# 🎓 Slidev KI-Schulungen Template

## 👋 Willkommen!

Sie haben erfolgreich die **professionelle Slidev-Präsentationsvorlage für KI-Schulungen** erhalten!

Diese Vorlage wurde speziell für Erwachsenenbildung entwickelt mit:
- 🎨 **Apple-inspiriertem Design** - Minimalistisch und professionell
- 🎭 **12+ Folientypen** - Von Content-Slides bis interaktiven Quiz
- ⚡ **Moderne Animationen** - Subtil und unter 300ms
- 📦 **Export-Optionen** - PDF, HTML, PPTX, PNG
- 🔧 **Voll konfigurierbar** - Farben, Fonts, Layouts

---

## 🚀 In 3 Schritten starten

### Schritt 1: Installation vorbereiten

Sie benötigen:
- **Node.js** (Version 18 oder höher)
- **Einen Code-Editor** (z.B. VS Code)
- **Ein Terminal/Kommandozeile**

### Schritt 2: Dependencies installieren

```bash
# Im Projektordner (slidev-ki-schulung):
npm install
```

### Schritt 3: Starten!

```bash
npm run dev
```

➡️ Öffnet automatisch im Browser: `http://localhost:3030`

**Das war's!** 🎉

---

## 📚 Wichtigste Dokumente

### 🟢 START (Hier beginnen!)

| Dokument | Wann lesen? | Dauer |
|----------|-------------|-------|
| **[INDEX.md](INDEX.md)** | Übersicht aller Docs | 2 min |
| **[QUICKSTART.md](QUICKSTART.md)** | Sofort loslegen | 5 min |
| **[README.md](README.md)** | Vollständige Infos | 15 min |

### 🟡 ANPASSEN

| Dokument | Wofür? |
|----------|--------|
| **[ANPASSUNGEN.md](ANPASSUNGEN.md)** | Design & Branding ändern |
| **[KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md)** | Copy-Paste Beispiele |
| **[PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md)** | Wo finde ich was? |

### 🔵 ARBEITEN

| Datei | Beschreibung |
|-------|-------------|
| **[slides.md](slides.md)** | Ihre Präsentation (WICHTIGSTE DATEI!) |
| **components/** | Alle Komponenten |
| **config/design-system.ts** | Design-Einstellungen |

---

## 🎯 Was kann ich damit machen?

### Content-Slides mit Icons
```vue
<ContentSlide
  title="Meine Punkte"
  :items="[
    { icon: '🎯', text: 'Punkt 1' },
    { icon: '⚡', text: 'Punkt 2' }
  ]"
/>
```

### Vergleiche
```vue
<ComparisonSlide
  leftTitle="Option A"
  rightTitle="Option B"
  :leftItems="[{ text: 'Gut', positive: true }]"
/>
```

### Interaktive Quiz
```vue
<QuizSlide
  question="Was ist KI?"
  :options="[
    { text: 'Antwort A', isCorrect: true }
  ]"
/>
```

### Code-Beispiele
```vue
<CodeExampleSlide
  language="python"
  :code="`print('Hello')`"
/>
```

**... und 8+ weitere Typen!**

---

## 📁 Projekt-Übersicht

```
slidev-ki-schulung/
│
├── 📄 slides.md              ← IHRE PRÄSENTATION
│
├── 📁 components/            ← 8 fertige Komponenten
│   ├── ContentSlide.vue
│   ├── ComparisonSlide.vue
│   ├── QuizSlide.vue
│   └── ...
│
├── 📁 config/
│   └── design-system.ts      ← Farben, Fonts, etc.
│
├── 📁 styles/
│   └── global.css            ← Globale Styles
│
└── 📚 Dokumentation/
    ├── INDEX.md              ← Übersicht
    ├── QUICKSTART.md         ← 5-Min Start
    ├── README.md             ← Vollständig
    ├── ANPASSUNGEN.md        ← Customization
    ├── KOMPONENTEN-REFERENZ.md
    └── PROJEKTSTRUKTUR.md
```

---

## ⚡ Schnellreferenz

### Befehle

```bash
npm run dev           # Entwicklung starten
npm run build         # HTML exportieren
npm run export-pdf    # PDF exportieren
npm run export-pptx   # PowerPoint exportieren
```

### Navigation in der Präsentation

| Taste | Funktion |
|-------|----------|
| `→` / `←` | Vor/Zurück |
| `Space` | Nächste Folie |
| `F` | Vollbild |
| `O` | Übersicht |
| `D` | Zeichnen |
| `G` | Zu Folie springen |

---

## 🎨 Design anpassen

### Farben ändern

**Datei:** `config/design-system.ts`

```typescript
colors: {
  primary: '#007AFF',    // ← Ihre Farbe
  secondary: '#5856D6',  // ← Ihre Farbe
}
```

### Logo hinzufügen

1. Logo nach `public/logo.png` kopieren
2. Siehe `ANPASSUNGEN.md` → "Logo und Branding"

---

## 🎓 Lernpfad

### Für Einsteiger

```
1. Diese Datei lesen (5 min) ✓
   ↓
2. QUICKSTART.md (5 min)
   ↓
3. slides.md ansehen (10 min)
   ↓
4. KOMPONENTEN-REFERENZ.md (bei Bedarf)
   ↓
5. Eigene Präsentation erstellen! 🎉
```

### Für Designer

```
1. QUICKSTART.md → Installation
   ↓
2. ANPASSUNGEN.md → Design ändern
   ↓
3. config/design-system.ts → Anpassen
   ↓
4. Fertig! 🎨
```

### Für Entwickler

```
1. README.md → Vollständige Übersicht
   ↓
2. PROJEKTSTRUKTUR.md → Architektur
   ↓
3. Components anpassen → Code in /components
   ↓
4. Erweitern! 🚀
```

---

## 📖 Beispiele in Action

Alle Folientypen sind in **`slides.md`** live demonstriert!

```bash
npm run dev
# → Öffnet Beispiel-Präsentation mit ALLEN Features
```

---

## 🆘 Hilfe

### Problem beim Starten?

**"Cannot find module"**
```bash
rm -rf node_modules
npm install
```

**"Port 3030 already in use"**
```bash
slidev --port 3031
```

**PDF-Export funktioniert nicht?**
```bash
npx playwright install chromium
```

➡️ Mehr in **[QUICKSTART.md](QUICKSTART.md)** → "Troubleshooting"

---

## ✅ Checkliste

- [ ] Node.js installiert? (`node --version`)
- [ ] `npm install` ausgeführt?
- [ ] `npm run dev` funktioniert?
- [ ] Browser zeigt Präsentation?
- [ ] `slides.md` gefunden?

**Alles ✓?** → Sie sind bereit! 🎉

---

## 🎯 Nächste Schritte

1. **[QUICKSTART.md](QUICKSTART.md)** lesen (5 Minuten)
2. **`slides.md`** öffnen und ansehen
3. **Eigene Inhalte** einfügen
4. **[KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md)** für Beispiele

---

## 📚 Alle Features

- ✅ 8+ Custom Komponenten
- ✅ 10+ Slidev Standard-Layouts
- ✅ Apple-Design-System
- ✅ Syntax-Highlighting
- ✅ Animationen
- ✅ Interaktive Quiz
- ✅ Code-Beispiele
- ✅ Markdown + Vue
- ✅ Dark Mode Ready
- ✅ Vollständig dokumentiert
- ✅ PDF/HTML/PPTX Export
- ✅ Responsive
- ✅ Open Source (MIT)

---

## 🎉 Los geht's!

**Nächster Schritt:**
```bash
npm run dev
```

**Dann öffnen:**
[QUICKSTART.md](QUICKSTART.md)

---

**Viel Erfolg mit Ihren KI-Schulungen! 🚀**

*Bei Fragen: Alle Dokumentationen sind verlinkt und durchsuchbar.*

---

<div align="center">

**Erstellt mit ❤️ für die Erwachsenenbildung**

[📖 Vollständige Docs](README.md) • [⚡ Quick Start](QUICKSTART.md) • [🎨 Anpassungen](ANPASSUNGEN.md)

</div>
