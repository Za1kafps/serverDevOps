<script setup lang="ts">
defineProps<{
  src?: string
  alt: string
}>()
</script>

<template>
  <div class="case-image">
    <img v-if="src" :src="src" :alt="alt" loading="lazy" />
    <div v-else class="case-image__empty">
      <span>PNG / JPG / WebP</span>
      <strong>{{ alt }}</strong>
    </div>
  </div>
</template>
