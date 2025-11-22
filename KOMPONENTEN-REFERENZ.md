# 🧩 Komponenten-Referenz mit Beispielen

Alle verfügbaren Komponenten mit Copy-Paste-Ready Beispielen.

## 📑 Inhaltsverzeichnis

1. [ContentSlide](#contentslide) - Bullet-Points mit Icons
2. [ComparisonSlide](#comparisonslide) - Vergleich
3. [AccordionSlide](#accordionslide) - Aufklappbar
4. [QuizSlide](#quizslide) - Interaktives Quiz
5. [BranchSlide](#branchslide) - Entscheidungsbaum
6. [CodeExampleSlide](#codeexampleslide) - Code mit Erklärung
7. [WebEmbedSlide](#webembedslide) - Webseite einbetten
8. [Counter](#counter) - Einfacher Counter

---

## ContentSlide

### 📝 Beschreibung
Zeigt Bullet-Points mit Icons und optionalen Animationen.

### 🎯 Verwendung
```vue
<ContentSlide
  title="Vorteile von KI"
  :animated="true"
  :items="[
    { icon: '🎯', text: 'Personalisiertes Lernen' },
    { icon: '⚡', text: 'Effiziente Wissensvermittlung' },
    { icon: '📊', text: 'Datenbasierte Kontrolle' },
    { icon: '🤝', text: 'Unterstützung der Lehrenden' }
  ]"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `title` | String | - | Folientitel |
| `items` | Array | - | Items mit icon und text |
| `animated` | Boolean | false | Stufenweise Animation |

### 💡 Beispiele

**Einfach (ohne Animation):**
```vue
<ContentSlide
  title="Einfache Liste"
  :items="[
    { text: 'Punkt ohne Icon' },
    { icon: '✓', text: 'Punkt mit Icon' }
  ]"
/>
```

**Mit Custom Delays:**
```vue
<ContentSlide
  title="Mit Timing"
  :animated="true"
  :items="[
    { icon: '1️⃣', text: 'Sofort', delay: 0 },
    { icon: '2️⃣', text: 'Nach 200ms', delay: 200 },
    { icon: '3️⃣', text: 'Nach 400ms', delay: 400 }
  ]"
/>
```

---

## ComparisonSlide

### 📝 Beschreibung
Zwei-Spalten Vergleich mit positiven/negativen Markierungen.

### 🎯 Verwendung
```vue
<ComparisonSlide
  title="Traditionell vs. KI-gestützt"
  leftTitle="Traditionell"
  rightTitle="KI-gestützt"
  :leftItems="[
    { text: 'Einheitliches Tempo', positive: false },
    { text: 'Bewährte Methoden', positive: true },
    { text: 'Persönlicher Kontakt', positive: true }
  ]"
  :rightItems="[
    { text: 'Individuelles Tempo', positive: true },
    { text: 'Adaptive Inhalte', positive: true },
    { text: 'Technologieabhängig', positive: false }
  ]"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `title` | String | - | Haupttitel |
| `leftTitle` | String | - | Linker Spaltentitel |
| `rightTitle` | String | - | Rechter Spaltentitel |
| `leftItems` | Array | - | Linke Items |
| `rightItems` | Array | - | Rechte Items |

### Item Struktur:
```typescript
{
  text: string,
  positive?: boolean  // true = grün/unterstrichen, false = rot/durchgestrichen
}
```

### 💡 Beispiele

**Pro/Contra:**
```vue
<ComparisonSlide
  title="Für und Wider"
  leftTitle="Vorteile"
  rightTitle="Nachteile"
  :leftItems="[
    { text: 'Schnell', positive: true },
    { text: 'Kostengünstig', positive: true }
  ]"
  :rightItems="[
    { text: 'Komplex', positive: false },
    { text: 'Wartungsintensiv', positive: false }
  ]"
/>
```

**Neutral:**
```vue
<ComparisonSlide
  title="Zwei Optionen"
  leftTitle="Option A"
  rightTitle="Option B"
  :leftItems="[
    { text: 'Eigenschaft 1' },
    { text: 'Eigenschaft 2' }
  ]"
  :rightItems="[
    { text: 'Eigenschaft 1' },
    { text: 'Eigenschaft 2' }
  ]"
/>
```

---

## AccordionSlide

### 📝 Beschreibung
Aufklappbare Kategorien für strukturierte Inhalte.

### 🎯 Verwendung
```vue
<AccordionSlide
  title="KI-Grundlagen"
  :allowMultiple="false"
  :items="[
    {
      title: 'Machine Learning',
      icon: '🤖',
      content: 'Algorithmen die aus Daten lernen...'
    },
    {
      title: 'Deep Learning',
      icon: '🧠',
      content: 'Neuronale Netzwerke mit vielen Schichten...'
    },
    {
      title: 'NLP',
      icon: '💬',
      content: 'Verarbeitung natürlicher Sprache...'
    }
  ]"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `title` | String | - | Folientitel |
| `items` | Array | - | Accordion-Items |
| `allowMultiple` | Boolean | false | Mehrere gleichzeitig offen |

### Item Struktur:
```typescript
{
  title: string,
  content: string,
  icon?: string
}
```

### 💡 Beispiele

**FAQ-Style:**
```vue
<AccordionSlide
  title="Häufige Fragen"
  :allowMultiple="true"
  :items="[
    {
      title: 'Was ist KI?',
      icon: '❓',
      content: 'Künstliche Intelligenz ist...'
    },
    {
      title: 'Wie funktioniert ML?',
      icon: '❓',
      content: 'Machine Learning nutzt...'
    }
  ]"
/>
```

**Ohne Icons:**
```vue
<AccordionSlide
  title="Themen"
  :items="[
    { title: 'Einführung', content: '...' },
    { title: 'Vertiefung', content: '...' }
  ]"
/>
```

---

## QuizSlide

### 📝 Beschreibung
Interaktives Multiple-Choice Quiz mit Feedback.

### 🎯 Verwendung
```vue
<QuizSlide
  question="Was ist der Hauptvorteil von Machine Learning?"
  hint="Denken Sie an Automatisierung"
  :options="[
    {
      text: 'Schnellere Computer',
      isCorrect: false,
      explanation: 'Nicht primär. ML ist eher durch bessere Algorithmen, nicht Hardware, erfolgreich.'
    },
    {
      text: 'Automatisches Lernen aus Daten',
      isCorrect: true,
      explanation: 'Richtig! ML-Systeme lernen Muster aus Daten ohne explizite Programmierung.'
    },
    {
      text: 'Keine Programmierung nötig',
      isCorrect: false,
      explanation: 'ML erfordert sehr wohl Programmierung - nur auf andere Weise.'
    }
  ]"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `question` | String | - | Frage |
| `options` | Array | - | Antwortmöglichkeiten |
| `hint` | String | undefined | Optionaler Hinweis |

### Option Struktur:
```typescript
{
  text: string,
  isCorrect: boolean,
  explanation?: string
}
```

### 💡 Beispiele

**Einfaches Quiz:**
```vue
<QuizSlide
  question="2 + 2 = ?"
  :options="[
    { text: '3', isCorrect: false },
    { text: '4', isCorrect: true },
    { text: '5', isCorrect: false }
  ]"
/>
```

**Mit Erklärungen:**
```vue
<QuizSlide
  question="Welche ist keine ML-Kategorie?"
  hint="Überlegen Sie, was zu ML gehört"
  :options="[
    { 
      text: 'Supervised Learning', 
      isCorrect: false,
      explanation: 'Doch, eine der Hauptkategorien' 
    },
    { 
      text: 'Database Management', 
      isCorrect: true,
      explanation: 'Richtig! Gehört nicht zu ML' 
    }
  ]"
/>
```

---

## BranchSlide

### 📝 Beschreibung
Entscheidungsbaum für Fallunterscheidungen.

### 🎯 Verwendung
```vue
<BranchSlide
  title="KI-Projekt: Welche Technologie?"
  centralQuestion="Welches Problem lösen Sie?"
  :branches="[
    {
      condition: 'Textanalyse',
      icon: '💬',
      result: 'Nutzen Sie NLP mit Transformers (BERT, GPT)'
    },
    {
      condition: 'Bilderkennung',
      icon: '📸',
      result: 'Computer Vision mit CNNs einsetzen'
    },
    {
      condition: 'Vorhersagen',
      icon: '📊',
      result: 'Supervised Learning (Random Forest, XGBoost)'
    }
  ]"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `title` | String | - | Folientitel |
| `centralQuestion` | String | - | Zentrale Frage |
| `branches` | Array | - | Verzweigungen |

### Branch Struktur:
```typescript
{
  condition: string,
  result: string,
  icon?: string,
  color?: string  // Optional: Custom-Farbe
}
```

### 💡 Beispiele

**Troubleshooting:**
```vue
<BranchSlide
  title="Fehlerdiagnose"
  centralQuestion="Was ist das Problem?"
  :branches="[
    {
      condition: 'Code funktioniert nicht',
      icon: '🐛',
      result: 'Prüfen Sie Syntax und Logik'
    },
    {
      condition: 'Performance-Problem',
      icon: '🐌',
      result: 'Optimieren Sie Algorithmen'
    }
  ]"
/>
```

**Mit Custom Farben:**
```vue
<BranchSlide
  centralQuestion="Welcher Ansatz?"
  :branches="[
    {
      condition: 'Ansatz A',
      result: 'Führt zu Ergebnis X',
      color: '#007AFF'
    },
    {
      condition: 'Ansatz B',
      result: 'Führt zu Ergebnis Y',
      color: '#FF3B30'
    }
  ]"
/>
```

---

## CodeExampleSlide

### 📝 Beschreibung
Code-Beispiel mit Syntax-Highlighting und Erklärung.

### 🎯 Verwendung
```vue
<CodeExampleSlide
  title="Python: Einfaches ML-Modell"
  language="python"
  explanation="Dieses Beispiel zeigt, wie man mit scikit-learn ein Machine Learning Modell trainiert. Wir nutzen den Decision Tree Classifier für Klassifikation."
  :code="`from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

# Daten aufteilen
X_train, X_test, y_train, y_test = train_test_split(X, y)

# Modell trainieren
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

# Evaluieren
score = clf.score(X_test, y_test)
print(f'Accuracy: {score}')`"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `title` | String | - | Titel |
| `language` | String | 'typescript' | Programmiersprache |
| `code` | String | - | Code als String |
| `explanation` | String | undefined | Erklärung |

### 💡 Beispiele

**JavaScript:**
```vue
<CodeExampleSlide
  title="Async/Await Beispiel"
  language="javascript"
  explanation="Moderne asynchrone Programmierung in JS"
  :code="`async function fetchData() {
  const response = await fetch('/api/data')
  const data = await response.json()
  return data
}`"
/>
```

**TypeScript:**
```vue
<CodeExampleSlide
  title="TypeScript Interface"
  language="typescript"
  :code="`interface User {
  name: string
  age: number
  email: string
}

function greet(user: User): string {
  return \`Hello \${user.name}!\`
}`"
/>
```

---

## WebEmbedSlide

### 📝 Beschreibung
Bettet eine Webseite als iframe ein.

### 🎯 Verwendung
```vue
<WebEmbedSlide
  title="Live Demo: Python Docs"
  url="https://docs.python.org"
  height="600px"
  :allowInput="false"
/>
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `title` | String | - | Titel |
| `url` | String | - | URL der Webseite |
| `height` | String | '600px' | Höhe des iframes |
| `allowInput` | Boolean | false | URL-Eingabefeld zeigen |

### 💡 Beispiele

**Mit URL-Eingabe:**
```vue
<WebEmbedSlide
  title="Webseite Ihrer Wahl"
  url="https://example.com"
  height="500px"
  :allowInput="true"
/>
```

**Fixe URL:**
```vue
<WebEmbedSlide
  title="Dokumentation"
  url="https://docs.python.org/3/"
  height="700px"
/>
```

---

## Counter

### 📝 Beschreibung
Einfacher Zähler (Beispiel-Komponente).

### 🎯 Verwendung
```vue
<Counter :count="10" />
```

### 📊 Props

| Prop | Typ | Standard | Beschreibung |
|------|-----|----------|--------------|
| `count` | Number | 0 | Startwert |

### 💡 Beispiele

**Mehrere Counter:**
```vue
<div class="flex gap-4">
  <Counter :count="0" />
  <Counter :count="5" />
  <Counter :count="10" />
</div>
```

---

## 🎨 Styling-Tipps

### Farben anpassen
```vue
<ContentSlide
  title="Custom Style"
  :items="[...]"
  style="--color-primary: #FF0000;"
/>
```

### Responsive Layouts
```vue
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <ComparisonSlide ... />
  <QuizSlide ... />
</div>
```

### Animationen kombinieren
```markdown
<div v-click>
  <ContentSlide :animated="true" ... />
</div>
```

---

## 🚀 Best Practices

1. **Konsistente Icons** - Nutzen Sie ähnliche Icon-Stile
2. **Lesbare Texte** - Nicht zu viel Text pro Folie
3. **Animationen** - Sparsam einsetzen, nicht übertreiben
4. **Farbschema** - Bleiben Sie bei Ihrer Farbpalette
5. **Beispiele** - Nutzen Sie echte, relevante Beispiele

---

## 📚 Weitere Infos

- Alle Komponenten sind in `slides.md` live demonstriert
- Source-Code in `/components` Ordner
- Anpassungen: Siehe `ANPASSUNGEN.md`

---

**Copy-Paste & Anpassen! 🎉**
