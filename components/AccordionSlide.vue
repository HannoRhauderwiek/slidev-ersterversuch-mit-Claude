<script setup lang="ts">
import { ref } from 'vue'

interface AccordionItem {
  title: string
  content: string
  icon?: string
}

interface Props {
  title: string
  items: AccordionItem[]
  allowMultiple?: boolean // Allow multiple items to be open at once
}

const props = withDefaults(defineProps<Props>(), {
  allowMultiple: false
})

const openItems = ref<Set<number>>(new Set())

const toggleItem = (index: number) => {
  if (openItems.value.has(index)) {
    openItems.value.delete(index)
  } else {
    if (!props.allowMultiple) {
      openItems.value.clear()
    }
    openItems.value.add(index)
  }
  // Trigger reactivity
  openItems.value = new Set(openItems.value)
}

const isOpen = (index: number) => openItems.value.has(index)
</script>

<template>
  <div class="accordion-slide">
    <h2 class="slide-title">{{ title }}</h2>
    
    <div class="accordion-container">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="accordion-item"
        :class="{ 'is-open': isOpen(index) }"
      >
        <button
          class="accordion-header"
          @click="toggleItem(index)"
        >
          <span v-if="item.icon" class="header-icon">{{ item.icon }}</span>
          <span class="header-title">{{ item.title }}</span>
          <span class="header-arrow" :class="{ 'rotated': isOpen(index) }">▶</span>
        </button>
        
        <Transition name="expand">
          <div v-if="isOpen(index)" class="accordion-content">
            <div class="content-inner">
              {{ item.content }}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
}

.accordion-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  overflow-y: auto;
}

.accordion-item {
  border-radius: 1rem;
  background: var(--color-surface);
  overflow: hidden;
  transition: all var(--duration-normal) var(--easing);
}

.accordion-item.is-open {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.accordion-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: left;
  transition: all var(--duration-fast) var(--easing);
}

.accordion-header:hover {
  background: rgba(0, 0, 0, 0.03);
}

.header-icon {
  font-size: 1.5rem;
  min-width: 2rem;
  text-align: center;
}

.header-title {
  flex: 1;
}

.header-arrow {
  font-size: 0.875rem;
  transition: transform var(--duration-normal) var(--easing);
  color: var(--color-primary);
}

.header-arrow.rotated {
  transform: rotate(90deg);
}

.accordion-content {
  overflow: hidden;
}

.content-inner {
  padding: 0 var(--spacing-3) var(--spacing-3) var(--spacing-3);
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* Expand Transition */
.expand-enter-active,
.expand-leave-active {
  transition: all var(--duration-normal) var(--easing);
  max-height: 500px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
