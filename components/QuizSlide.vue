<script setup lang="ts">
import { ref, computed } from 'vue'

interface QuizOption {
  text: string
  isCorrect: boolean
  explanation?: string
}

interface Props {
  question: string
  options: QuizOption[]
  hint?: string
}

const props = defineProps<Props>()

const selectedIndex = ref<number | null>(null)
const showExplanation = ref(false)

const selectOption = (index: number) => {
  selectedIndex.value = index
  showExplanation.value = true
}

const isCorrect = computed(() => {
  if (selectedIndex.value === null) return null
  return props.options[selectedIndex.value].isCorrect
})

const currentExplanation = computed(() => {
  if (selectedIndex.value === null) return ''
  return props.options[selectedIndex.value].explanation || ''
})

const reset = () => {
  selectedIndex.value = null
  showExplanation.value = false
}
</script>

<template>
  <div class="quiz-slide">
    <div class="quiz-header">
      <h2 class="question">{{ question }}</h2>
      <p v-if="hint && !showExplanation" class="hint">💡 {{ hint }}</p>
    </div>

    <div class="options-container">
      <button
        v-for="(option, index) in options"
        :key="index"
        class="quiz-option"
        :class="{
          'selected': selectedIndex === index,
          'correct': selectedIndex === index && isCorrect,
          'incorrect': selectedIndex === index && !isCorrect,
          'disabled': selectedIndex !== null && selectedIndex !== index
        }"
        @click="selectOption(index)"
        :disabled="selectedIndex !== null"
      >
        <span class="option-letter">{{ String.fromCharCode(65 + index) }}</span>
        <span class="option-text">{{ option.text }}</span>
        <span v-if="selectedIndex === index" class="option-icon">
          {{ isCorrect ? '✓' : '✗' }}
        </span>
      </button>
    </div>

    <Transition name="fade">
      <div v-if="showExplanation" class="explanation-container">
        <div class="explanation" :class="{ 'correct': isCorrect }">
          <h3 class="explanation-title">
            {{ isCorrect ? '✓ Richtig!' : '✗ Nicht ganz' }}
          </h3>
          <p v-if="currentExplanation" class="explanation-text">
            {{ currentExplanation }}
          </p>
          <button class="reset-button" @click="reset">
            Erneut versuchen
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.quiz-slide {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-4);
  gap: var(--spacing-4);
}

.quiz-header {
  text-align: center;
}

.question {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-2);
  line-height: 1.3;
}

.hint {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  font-style: italic;
}

.options-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3);
  background: var(--color-surface);
  border: 2px solid transparent;
  border-radius: 1rem;
  cursor: pointer;
  transition: all var(--duration-normal) var(--easing);
  text-align: left;
  font-size: 1.1rem;
}

.quiz-option:hover:not(:disabled) {
  border-color: var(--color-primary);
  transform: translateX(8px);
}

.quiz-option.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quiz-option.selected {
  transform: scale(1.02);
}

.quiz-option.correct {
  background: rgba(52, 199, 89, 0.1);
  border-color: var(--color-success);
}

.quiz-option.incorrect {
  background: rgba(255, 59, 48, 0.1);
  border-color: var(--color-error);
}

.option-letter {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.2rem;
}

.option-text {
  flex: 1;
  line-height: 1.5;
}

.option-icon {
  font-size: 1.5rem;
  font-weight: bold;
}

.correct .option-icon {
  color: var(--color-success);
}

.incorrect .option-icon {
  color: var(--color-error);
}

.explanation-container {
  position: fixed;
  bottom: var(--spacing-4);
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - var(--spacing-8));
  max-width: 800px;
  z-index: 100;
}

.explanation {
  background: white;
  border-radius: 1rem;
  padding: var(--spacing-4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border: 2px solid var(--color-error);
}

.explanation.correct {
  border-color: var(--color-success);
}

.explanation-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}

.correct .explanation-title {
  color: var(--color-success);
}

.incorrect .explanation-title {
  color: var(--color-error);
}

.explanation-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: var(--spacing-3);
  color: var(--color-text-secondary);
}

.reset-button {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: var(--spacing-2) var(--spacing-3);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--duration-fast) var(--easing);
}

.reset-button:hover {
  background: var(--color-secondary);
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all var(--duration-normal) var(--easing);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}
</style>
