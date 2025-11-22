# 🚀 Quick Start Guide

## Erste Schritte in 5 Minuten

### 1. Voraussetzungen prüfen

Stellen Sie sicher, dass Sie Node.js installiert haben:

```bash
node --version  # Sollte v18 oder höher sein
npm --version
```

### 2. Projekt einrichten

```bash
# In das Projektverzeichnis wechseln
cd slidev-ki-schulung

# Dependencies installieren
npm install

# ODER mit pnpm (schneller)
npm install -g pnpm
pnpm install
```

### 3. Entwicklungsserver starten

```bash
npm run dev
```

Die Präsentation öffnet sich automatisch im Browser unter `http://localhost:3030`

### 4. Navigation

- **Pfeiltasten** ← → : Vor/Zurück
- **Space** : Nächste Folie
- **F** : Vollbild
- **O** : Übersicht
- **D** : Zeichenmodus
- **C** : Kamera (für Präsentator-Notizen)
- **G** : Zu Folie springen

### 5. Erste Präsentation erstellen

Öffnen Sie `slides.md` in Ihrem Code-Editor:

```markdown
---
theme: default
title: Meine erste KI-Schulung
---

# Willkommen

Das ist meine erste Folie!

---

# Zweite Folie

- Punkt 1
- Punkt 2
- Punkt 3
```

Speichern Sie - die Änderungen erscheinen sofort im Browser!

### 6. Komponenten nutzen

```markdown
---
# Content Slide verwenden

<ContentSlide
  title="Meine Punkte"
  :animated="true"
  :items="[
    { icon: '🎯', text: 'Erster Punkt' },
    { icon: '⚡', text: 'Zweiter Punkt' }
  ]"
/>
```

### 7. Export als PDF

```bash
npm run export-pdf
```

Die PDF wird als `slides-export.pdf` gespeichert.

### 8. Als HTML exportieren

```bash
npm run build
```

Die statische Website wird im `dist/` Ordner erstellt.

## ⚡ Nächste Schritte

1. **Design anpassen**: Siehe `ANPASSUNGEN.md`
2. **Neue Komponenten**: Siehe `README.md` → Komponenten
3. **Layouts verwenden**: Siehe Beispiele in `slides.md`

## 🎯 Typische Workflows

### Neue Präsentation erstellen

1. Kopieren Sie `slides.md` zu `meine-praesentation.md`
2. Passen Sie den Frontmatter an
3. Fügen Sie Ihre Folien hinzu
4. Starten Sie mit: `slidev meine-praesentation.md`

### Mehrere Präsentationen verwalten

```
projekt/
├── slides.md              # Hauptpräsentation
├── praesentation-1.md     # Weitere Präsentation
├── praesentation-2.md
└── components/            # Gemeinsame Komponenten
```

Starten mit:
```bash
slidev praesentation-1.md
```

### Mit Team arbeiten

1. **Git Repository** erstellen
2. `.gitignore` ist bereits konfiguriert
3. **Branches** für verschiedene Themen
4. **Pull Requests** für Reviews

## 🐛 Häufige Probleme

### "Cannot find module"
```bash
# Dependencies neu installieren
rm -rf node_modules
npm install
```

### Port 3030 bereits belegt
```bash
# Anderen Port verwenden
slidev --port 3031
```

### Komponenten werden nicht angezeigt
- Prüfen Sie die Groß-/Kleinschreibung
- Neustart des Dev-Servers
- Browser-Cache leeren (Strg+Shift+R)

### PDF-Export funktioniert nicht
```bash
# Playwright installieren
npx playwright install chromium
```

## 📚 Hilfreiche Befehle

```bash
# Development
npm run dev              # Server starten
npm run dev -- --port 3031  # Mit anderem Port

# Export
npm run build           # HTML-Build
npm run export-pdf      # PDF
npm run export-pptx     # PowerPoint
npm run export-png      # PNG-Bilder

# Cleanup
rm -rf node_modules     # Dependencies löschen
rm -rf .slidev          # Cache löschen
```

## 🎓 Lernen

### Videos & Tutorials
- [Slidev Dokumentation](https://sli.dev)
- [YouTube Tutorials](https://www.youtube.com/results?search_query=slidev+tutorial)

### Beispiele
- Alle Folientypen sind in `slides.md` demonstriert
- Jede Komponente hat Beispiele

### Community
- [GitHub Discussions](https://github.com/slidevjs/slidev/discussions)
- [Discord](https://chat.sli.dev)

## ✅ Checkliste für Ihre erste Präsentation

- [ ] Dependencies installiert
- [ ] Dev-Server läuft
- [ ] Slides.md bearbeitet
- [ ] Komponenten getestet
- [ ] Farben angepasst (optional)
- [ ] Logo hinzugefügt (optional)
- [ ] PDF-Export getestet
- [ ] Bereit für die Schulung! 🎉

---

**Los geht's! 🚀**

Bei Fragen: Siehe `README.md` für ausführliche Dokumentation.
