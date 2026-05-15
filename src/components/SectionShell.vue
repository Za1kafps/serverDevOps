<script setup lang="ts">
defineProps<{
  id: string
  eyebrow?: string
  title?: string
  mutedTitle?: string
  wide?: boolean
}>()
</script>

<template>
  <section :id="id" class="section-shell" :class="{ 'section-shell--wide': wide }">
    <div v-if="eyebrow || title" class="section-heading" data-reveal>
      <p v-if="eyebrow" class="eyebrow">• {{ eyebrow }}</p>
      <h2 v-if="title">
        {{ title }}
        <span v-if="mutedTitle">{{ mutedTitle }}</span>
      </h2>
    </div>
    <slot />
  </section>
</template>
