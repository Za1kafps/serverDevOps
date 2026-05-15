<script setup lang="ts">
import { computed } from 'vue'
import { getToolIcon } from '../content/tools'

const props = defineProps<{
  label: string
  showIcon?: boolean
}>()

const iconSrc = computed(() => getToolIcon(props.label))
</script>

<template>
  <span class="tool-badge">
    <img v-if="showIcon !== false && iconSrc" :src="iconSrc" :alt="label" loading="lazy" />
    <span>{{ label }}</span>
  </span>
</template>
