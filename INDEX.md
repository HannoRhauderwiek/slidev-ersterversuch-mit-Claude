# 📚 Dokumentations-Index

Willkommen bei der Slidev KI-Schulungen Vorlage! Diese Datei hilft Ihnen, die richtige Dokumentation zu finden.

## 🎯 Wo fange ich an?

### Ich bin **neu** bei Slidev
➡️ Starten Sie mit [QUICKSTART.md](QUICKSTART.md)
- Installation in 5 Minuten
- Erste Präsentation erstellen
- Grundlegende Navigation

### Ich möchte die **Vorlage verwenden**
➡️ Lesen Sie [README.md](README.md)
- Vollständige Feature-Übersicht
- Alle Folientypen erklärt
- Verwendungsbeispiele
- Best Practices

### Ich möchte die **Vorlage anpassen**
➡️ Siehe [ANPASSUNGEN.md](ANPASSUNGEN.md)
- Farben und Design ändern
- Neue Komponenten erstellen
- Logo und Branding
- Schriftarten anpassen

### Ich suche **Code-Beispiele**
➡️ Öffnen Sie [KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md)
- Copy-Paste-Ready Beispiele
- Alle Props erklärt
- Varianten und Use-Cases
- Styling-Tipps

### Ich verstehe die **Struktur nicht**
➡️ Konsultieren Sie [PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md)
- Welche Datei macht was?
- Wo finde ich was?
- Was darf ich ändern?
- Generierte vs. Source-Dateien

## 📖 Alle Dokumentationen

### 🚀 Getting Started

| Dokument | Zweck | Für wen? |
|----------|-------|----------|
| [QUICKSTART.md](QUICKSTART.md) | 5-Minuten Schnelleinstieg | Einsteiger |
| [README.md](README.md) | Vollständige Dokumentation | Alle |

### 🎨 Anpassung & Entwicklung

| Dokument | Zweck | Für wen? |
|----------|-------|----------|
| [ANPASSUNGEN.md](ANPASSUNGEN.md) | Design & Komponenten anpassen | Entwickler |
| [KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md) | Beispiele für alle Komponenten | Content-Ersteller |

### 🔧 Technische Referenz

| Dokument | Zweck | Für wen? |
|----------|-------|----------|
| [PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md) | Datei- und Ordnerstruktur | Entwickler |
| [package.json](package.json) | Dependencies & Scripts | Entwickler |
| [slidev.config.ts](slidev.config.ts) | Slidev-Konfiguration | Entwickler |

## 🎓 Lernpfade

### Pfad 1: Content-Ersteller (Nicht-Technisch)

1. **Start:** [QUICKSTART.md](QUICKSTART.md) - Installation
2. **Dann:** [slides.md](slides.md) - Beispiele ansehen
3. **Nutzen:** [KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md) - Komponenten verwenden
4. **Optional:** [README.md](README.md) Abschnitt "Folientypen"

**Sie können:**
- Präsentationen erstellen
- Komponenten verwenden
- Inhalte strukturieren
- Exportieren (PDF, HTML)

---

### Pfad 2: Designer

1. **Start:** [QUICKSTART.md](QUICKSTART.md) - Setup
2. **Design:** [ANPASSUNGEN.md](ANPASSUNGEN.md) - Branding anpassen
3. **Verstehen:** [PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md) - Style-Dateien finden
4. **Referenz:** [config/design-system.ts](config/design-system.ts) - Design-Tokens

**Sie können:**
- Farben anpassen
- Logo einbinden
- Schriftarten ändern
- Eigenes Branding

---

### Pfad 3: Entwickler

1. **Basis:** [README.md](README.md) - Vollständige Übersicht
2. **Struktur:** [PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md) - Architektur
3. **Custom:** [ANPASSUNGEN.md](ANPASSUNGEN.md) - Neue Komponenten
4. **Code:** [KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md) - API-Referenz
5. **Config:** [slidev.config.ts](slidev.config.ts), [vite.config.ts](vite.config.ts)

**Sie können:**
- Neue Komponenten entwickeln
- Layouts erstellen
- Build anpassen
- Plugins integrieren

## 🔍 Schnellreferenz

### Häufige Aufgaben

| Aufgabe | Wo finde ich das? |
|---------|-------------------|
| Präsentation starten | `QUICKSTART.md` → Abschnitt "Dev-Server" |
| Neue Folie erstellen | `slides.md` bearbeiten |
| Komponente nutzen | `KOMPONENTEN-REFERENZ.md` |
| Farbe ändern | `ANPASSUNGEN.md` → "Farben ändern" |
| Logo hinzufügen | `ANPASSUNGEN.md` → "Logo und Branding" |
| PDF exportieren | `QUICKSTART.md` → "Export" |
| Fehler beheben | `QUICKSTART.md` → "Häufige Probleme" |
| Neue Komponente | `ANPASSUNGEN.md` → "Komponenten-Anpassungen" |

### Code-Beispiele finden

| Komponente | Beispiel in |
|------------|-------------|
| ContentSlide | `KOMPONENTEN-REFERENZ.md` + `slides.md` |
| ComparisonSlide | `KOMPONENTEN-REFERENZ.md` + `slides.md` |
| QuizSlide | `KOMPONENTEN-REFERENZ.md` + `slides.md` |
| Alle anderen | `KOMPONENTEN-REFERENZ.md` |

## 📁 Wichtige Dateien

### Arbeiten Sie hauptsächlich mit:

```
📄 slides.md                    # Ihre Präsentation
📁 components/                  # Komponenten
   ├── ContentSlide.vue        # Bullet-Points
   ├── ComparisonSlide.vue     # Vergleiche
   └── ...
📁 config/
   └── design-system.ts        # Design-Tokens
📁 styles/
   └── global.css              # Globale Styles
```

### Konfigurationsdateien:

```
⚙️ slidev.config.ts            # Slidev-Einstellungen
⚙️ package.json                # Dependencies
⚙️ uno.config.ts               # CSS-Framework
```

## 🆘 Hilfe & Support

### Problem? Schauen Sie hier:

1. **Installation/Setup-Probleme**
   - [QUICKSTART.md](QUICKSTART.md) → "Häufige Probleme"

2. **Komponente funktioniert nicht**
   - [KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md) → Beispiele prüfen
   - [PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md) → Dateistruktur

3. **Design-Probleme**
   - [ANPASSUNGEN.md](ANPASSUNGEN.md) → "Häufige Probleme"
   - [styles/global.css](styles/global.css) → CSS-Variablen

4. **Build/Export-Fehler**
   - [README.md](README.md) → "Export-Optionen"
   - [QUICKSTART.md](QUICKSTART.md) → "Troubleshooting"

## 🎯 Empfohlener Workflow

### Für neue Präsentationen:

```
1. QUICKSTART.md lesen (5 min)
   ↓
2. slides.md als Template kopieren
   ↓
3. KOMPONENTEN-REFERENZ.md → Beispiele kopieren
   ↓
4. Inhalte anpassen
   ↓
5. Export → Fertig! 🎉
```

### Für Anpassungen:

```
1. ANPASSUNGEN.md lesen
   ↓
2. Design-System anpassen (config/design-system.ts)
   ↓
3. Logo hinzufügen (public/)
   ↓
4. Testen mit npm run dev
   ↓
5. Deployment! 🚀
```

## 📚 Externe Ressourcen

- [Slidev Dokumentation](https://sli.dev)
- [Vue 3 Guide](https://vuejs.org/guide/)
- [Markdown Guide](https://www.markdownguide.org/)
- [UnoCSS Docs](https://unocss.dev/)

## 🎨 Features auf einen Blick

### Folientypen (8+)

- ✅ Content Slides - Bullet-Points
- ✅ Comparison Slides - Vergleiche
- ✅ Accordion Slides - Aufklappbar
- ✅ Quiz Slides - Interaktiv
- ✅ Branch Slides - Entscheidungsbäume
- ✅ Code Examples - Mit Syntax-Highlighting
- ✅ Web Embeds - iframes
- ✅ Standard Slidev Layouts - 10+ weitere

### Features

- 🎨 Apple-inspiriertes Design
- ⚡ Subtile Animationen (< 300ms)
- 📱 Vollständig responsiv
- 🌓 Dark Mode ready
- 📦 Export als PDF, HTML, PPTX, PNG
- 🎯 8px Grid-System
- 🔧 Voll konfigurierbar
- 📚 Umfassend dokumentiert

## 🏁 Zusammenfassung

**Einsteiger?**
1. [QUICKSTART.md](QUICKSTART.md)
2. [slides.md](slides.md) ansehen
3. [KOMPONENTEN-REFERENZ.md](KOMPONENTEN-REFERENZ.md) nutzen

**Fortgeschritten?**
1. [README.md](README.md) - Alles im Detail
2. [ANPASSUNGEN.md](ANPASSUNGEN.md) - Customization
3. [PROJEKTSTRUKTUR.md](PROJEKTSTRUKTUR.md) - Architektur

**Entwickler?**
- Alle Docs + Source-Code in `/components`

---

**Los geht's! Viel Erfolg mit Ihrer Präsentation! 🎉**

*Bei Fragen: Alle Dokumente sind verlinkt und durchsuchbar.*
