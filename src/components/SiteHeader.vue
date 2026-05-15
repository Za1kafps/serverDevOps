<script setup lang="ts">
import { useHeaderVisibility } from '../composables/useHeaderVisibility'
import { navItems } from '../content/navigation'

const { isCompact, isHidden } = useHeaderVisibility()
</script>

<template>
  <header class="site-header" :class="{ 'is-compact': isCompact, 'is-hidden': isHidden }">
    <a class="brand" href="#home" aria-label="Za1ka home">
      <span class="brand__mark">&lt;/&gt;</span>
      <span class="brand__text">serverDev</span>
    </a>

    <nav class="site-nav" aria-label="Основная навигация">
      <a v-for="item in navItems" :key="item.href" :href="item.href">
        {{ item.label }}
      </a>
    </nav>

    <a class="header-cta" href="#contacts">Обсудить проект</a>
  </header>
</template>
