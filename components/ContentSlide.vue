<script setup lang="ts">
import { ref } from 'vue'

interface ContentItem {
  icon?: string
  text: string
  delay?: number
}

const props = defineProps<{
  title: string
  items: ContentItem[]
  animated?: boolean
}>()

const visibleItems = ref<number[]>([])

if (!props.animated) {
  visibleItems.value = props.items.map((_, i) => i)
}

const showItem = (index: number) => {
  if (!visibleItems.value.includes(index)) {
    visibleItems.value.push(index)
  }
}
</script>

<template>
  <div class="content-slide">
    <h2 class="slide-title">{{ title }}</h2>
    <div class="content-items">
      <div
        v-for="(item, index) in items"
        :key="index"
        v-click="animated ? () => showItem(index) : undefined"
        class="content-item"
        :class="{ 'visible': visibleItems.includes(index) }"
        :style="{ transitionDelay: `${(item.delay || index * 100)}ms` }"
      >
        <div class="item-icon" v-if="item.icon">
          {{ item.icon }}
        </div>
        <div class="item-text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-4);
  letter-spacing: -0.02em;
}

.content-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.content-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  background: var(--color-surface);
  border-radius: 1rem;
  opacity: 0;
  transform: translateX(-20px);
  transition: all var(--duration-normal) var(--easing);
}

.content-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.item-icon {
  font-size: 2rem;
  min-width: 3rem;
  text-align: center;
}

.item-text {
  flex: 1;
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-text);
}
</style>
