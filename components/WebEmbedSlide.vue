<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  title: string
  url: string
  height?: string
  allowInput?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: '600px',
  allowInput: false
})

const currentUrl = ref(props.url)
const iframeError = ref(false)

const loadUrl = () => {
  iframeError.value = false
  if (props.allowInput && currentUrl.value) {
    // Reload iframe
  }
}

const handleError = () => {
  iframeError.value = true
}
</script>

<template>
  <div class="web-embed-slide">
    <div class="embed-header">
      <h2 class="slide-title">{{ title }}</h2>
      
      <div v-if="allowInput" class="url-input-container">
        <input
          v-model="currentUrl"
          type="url"
          class="url-input"
          placeholder="Enter URL..."
          @keyup.enter="loadUrl"
        />
        <button class="load-button" @click="loadUrl">
          Laden
        </button>
      </div>
    </div>

    <div class="iframe-container" :style="{ height }">
      <div v-if="iframeError" class="error-message">
        <div class="error-icon">⚠️</div>
        <h3>Webseite konnte nicht geladen werden</h3>
        <p>Die Webseite erlaubt möglicherweise keine Einbettung.</p>
        <a :href="currentUrl" target="_blank" class="external-link">
          In neuem Tab öffnen →
        </a>
      </div>
      
      <iframe
        v-else
        :src="currentUrl"
        class="web-iframe"
        frameborder="0"
        allowfullscreen
        @error="handleError"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.web-embed-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
  gap: var(--spacing-3);
}

.embed-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.slide-title {
  font-size: 2rem;
  font-weight: 700;
}

.url-input-container {
  display: flex;
  gap: var(--spacing-2);
}

.url-input {
  flex: 1;
  padding: var(--spacing-2);
  border: 2px solid var(--color-border);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: var(--font-mono);
  transition: border-color var(--duration-fast) var(--easing);
}

.url-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.load-button {
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing);
}

.load-button:hover {
  background: var(--color-secondary);
  transform: translateY(-1px);
}

.iframe-container {
  flex: 1;
  position: relative;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.web-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: var(--spacing-4);
  text-align: center;
  background: var(--color-surface);
}

.error-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-2);
}

.error-message h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}

.error-message p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-3);
}

.external-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-2) var(--spacing-3);
  background: var(--color-primary);
  color: white;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all var(--duration-fast) var(--easing);
}

.external-link:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
}
</style>
