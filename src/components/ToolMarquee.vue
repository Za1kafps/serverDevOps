<script setup lang="ts">
import { toolMarqueeItems } from '../content/tools'

const repeatedTools = [...toolMarqueeItems, ...toolMarqueeItems]
</script>

<template>
  <section class="tool-marquee" aria-label="Технологии">
    <div class="tool-marquee__track">
      <span v-for="(tool, index) in repeatedTools" :key="`${tool}-${index}`">
        {{ tool }}
      </span>
    </div>
  </section>
</template>
