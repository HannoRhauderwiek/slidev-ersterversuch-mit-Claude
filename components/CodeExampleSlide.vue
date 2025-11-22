<script setup lang="ts">
interface Props {
  title: string
  language?: string
  code: string
  explanation?: string
  highlights?: number[] // Line numbers to highlight
}

const props = withDefaults(defineProps<Props>(), {
  language: 'typescript'
})
</script>

<template>
  <div class="code-example-slide">
    <h2 class="slide-title">{{ title }}</h2>
    
    <div class="code-container">
      <div class="code-section">
        <div class="code-header">
          <span class="language-badge">{{ language }}</span>
        </div>
        <div class="code-block">
          <pre><code>{{ code }}</code></pre>
        </div>
      </div>
      
      <div v-if="explanation" class="explanation-section">
        <div class="explanation-header">
          <span class="explanation-icon">💡</span>
          <span>Erklärung</span>
        </div>
        <div class="explanation-content">
          {{ explanation }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-example-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
}

.slide-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-3);
}

.code-container {
  flex: 1;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-4);
  overflow: hidden;
}

.code-section {
  display: flex;
  flex-direction: column;
  background: #1E1E1E;
  border-radius: 1rem;
  overflow: hidden;
}

.code-header {
  padding: var(--spacing-2) var(--spacing-3);
  background: #2D2D30;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.language-badge {
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
}

.code-block {
  flex: 1;
  padding: var(--spacing-3);
  overflow: auto;
}

.code-block pre {
  margin: 0;
  background: transparent;
  padding: 0;
}

.code-block code {
  font-family: var(--font-mono);
  font-size: 1rem;
  line-height: 1.6;
  color: #D4D4D4;
  background: transparent;
  padding: 0;
}

.explanation-section {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: 1rem;
  overflow: hidden;
}

.explanation-header {
  padding: var(--spacing-2) var(--spacing-3);
  background: white;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-weight: 600;
  font-size: 1.1rem;
}

.explanation-icon {
  font-size: 1.5rem;
}

.explanation-content {
  flex: 1;
  padding: var(--spacing-3);
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  overflow: auto;
}
</style>
