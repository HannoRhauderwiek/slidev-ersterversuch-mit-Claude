<script setup lang="ts">
interface ComparisonItem {
  text: string
  positive?: boolean // true = positive (underline, green), false = negative (strikethrough, red)
}

interface Props {
  title: string
  leftTitle: string
  rightTitle: string
  leftItems: ComparisonItem[]
  rightItems: ComparisonItem[]
}

const props = defineProps<Props>()
</script>

<template>
  <div class="comparison-slide">
    <h2 class="slide-title">{{ title }}</h2>
    
    <div class="comparison-container">
      <!-- Left Column -->
      <div class="comparison-column left">
        <h3 class="column-title">{{ leftTitle }}</h3>
        <div class="items-list">
          <div
            v-for="(item, index) in leftItems"
            :key="index"
            v-click
            class="comparison-item"
            :class="{
              'positive': item.positive === true,
              'negative': item.positive === false
            }"
          >
            <span v-if="item.positive === true" class="marker">✓</span>
            <span v-else-if="item.positive === false" class="marker">✗</span>
            <span class="item-text">{{ item.text }}</span>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider">
        <div class="divider-line"></div>
      </div>

      <!-- Right Column -->
      <div class="comparison-column right">
        <h3 class="column-title">{{ rightTitle }}</h3>
        <div class="items-list">
          <div
            v-for="(item, index) in rightItems"
            :key="index"
            v-click
            class="comparison-item"
            :class="{
              'positive': item.positive === true,
              'negative': item.positive === false
            }"
          >
            <span v-if="item.positive === true" class="marker">✓</span>
            <span v-else-if="item.positive === false" class="marker">✗</span>
            <span class="item-text">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comparison-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
}

.slide-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  text-align: center;
}

.comparison-container {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--spacing-4);
}

.comparison-column {
  display: flex;
  flex-direction: column;
}

.column-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--spacing-3);
  text-align: center;
}

.items-list {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.comparison-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-2);
  background: var(--color-surface);
  border-radius: 0.5rem;
  font-size: 1.1rem;
  transition: all var(--duration-normal) var(--easing);
  opacity: 0;
  transform: scale(0.95);
}

.comparison-item.slidev-vclick-target {
  opacity: 1;
  transform: scale(1);
}

.marker {
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 1.5rem;
}

.positive .marker {
  color: var(--color-success);
}

.negative .marker {
  color: var(--color-error);
}

.item-text {
  flex: 1;
  line-height: 1.5;
}

.positive .item-text {
  color: var(--color-success);
  text-decoration: underline;
  text-decoration-color: var(--color-success);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.negative .item-text {
  color: var(--color-error);
  text-decoration: line-through;
  opacity: 0.7;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2) 0;
}

.divider-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--color-border) 20%,
    var(--color-border) 80%,
    transparent
  );
  border-radius: 1px;
}
</style>
