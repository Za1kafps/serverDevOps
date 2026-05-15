<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  label: string
  src?: string
  tone?: 'green' | 'blue' | 'yellow' | 'pink' | 'cyan'
}>()

const failed = ref(false)

const handleError = () => {
  failed.value = true
}
</script>

<template>
  <span class="tool-icon" :class="tone ? `tool-icon--${tone}` : undefined" aria-hidden="true">
    <img v-if="props.src && !failed" :src="props.src" :alt="label" loading="lazy" @error="handleError" />
  </span>
</template>
