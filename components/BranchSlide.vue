<script setup lang="ts">
import { ref } from 'vue'

interface Branch {
  condition: string
  result: string
  icon?: string
  color?: string
}

interface Props {
  title: string
  centralQuestion: string
  branches: Branch[]
}

const props = defineProps<Props>()

const expandedBranch = ref<number | null>(null)

const toggleBranch = (index: number) => {
  expandedBranch.value = expandedBranch.value === index ? null : index
}

const getBranchColor = (branch: Branch, index: number) => {
  if (branch.color) return branch.color
  const colors = ['#007AFF', '#5856D6', '#FF9500', '#34C759', '#FF3B30']
  return colors[index % colors.length]
}
</script>

<template>
  <div class="branch-slide">
    <h2 class="slide-title">{{ title }}</h2>
    
    <div class="branch-container">
      <!-- Central Question -->
      <div class="central-question">
        <div class="question-bubble">
          <span class="question-icon">?</span>
          <span class="question-text">{{ centralQuestion }}</span>
        </div>
      </div>

      <!-- Branches -->
      <div class="branches-grid">
        <div
          v-for="(branch, index) in branches"
          :key="index"
          class="branch-item"
          :class="{ 'expanded': expandedBranch === index }"
          @click="toggleBranch(index)"
        >
          <!-- Connection Line -->
          <div class="connection-line" :style="{ background: getBranchColor(branch, index) }"></div>
          
          <!-- Branch Card -->
          <div class="branch-card" :style="{ borderColor: getBranchColor(branch, index) }">
            <div class="branch-header">
              <span v-if="branch.icon" class="branch-icon">{{ branch.icon }}</span>
              <span class="branch-condition">{{ branch.condition }}</span>
              <span class="expand-arrow" :class="{ 'rotated': expandedBranch === index }">▼</span>
            </div>
            
            <Transition name="expand">
              <div v-if="expandedBranch === index" class="branch-result">
                <div class="result-arrow">→</div>
                <div class="result-text">{{ branch.result }}</div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.branch-slide {
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

.branch-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
}

.central-question {
  position: relative;
  z-index: 10;
}

.question-bubble {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-4);
  background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
  color: white;
  border-radius: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  box-shadow: 0 8px 20px rgba(0, 122, 255, 0.3);
}

.question-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-4);
  width: 100%;
  max-width: 1200px;
}

.branch-item {
  position: relative;
  cursor: pointer;
}

.connection-line {
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 2rem;
  opacity: 0.3;
}

.branch-card {
  background: var(--color-surface);
  border: 2px solid;
  border-radius: 1rem;
  padding: var(--spacing-3);
  transition: all var(--duration-normal) var(--easing);
  height: 100%;
}

.branch-item:hover .branch-card {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.branch-item.expanded .branch-card {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.branch-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-weight: 600;
  font-size: 1.1rem;
}

.branch-icon {
  font-size: 1.5rem;
}

.branch-condition {
  flex: 1;
}

.expand-arrow {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  transition: transform var(--duration-normal) var(--easing);
}

.expand-arrow.rotated {
  transform: rotate(180deg);
}

.branch-result {
  margin-top: var(--spacing-3);
  padding-top: var(--spacing-3);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}

.result-arrow {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
}

.result-text {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* Expand Transition */
.expand-enter-active,
.expand-leave-active {
  transition: all var(--duration-normal) var(--easing);
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 300px;
  opacity: 1;
}
</style>
