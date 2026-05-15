<script setup lang="ts">
import { heroStats } from '../content/hero'
import { heroTools } from '../content/tools'
import PhotoPlaceholder from './PhotoPlaceholder.vue'
import ToolIcon from './ToolIcon.vue'
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-panel panel-glow" data-reveal>
      <div class="hero-media">
        <PhotoPlaceholder label="Здесь будет мое фото" />
      </div>

      <div class="hero-copy">
        <p class="code-line">
          &lt;span&gt;Привет, я Евгений, или же Za1ka — DevOps инженер, который собирает надежную инфраструктуру&lt;/span&gt;
        </p>
        <h1>DevOps инженер и специалист по <span>кибербезопасности</span>_</h1>
        <p class="hero-lead">
          Я настраиваю и усиливаю production-инфраструктуру на базе Linux, Nginx,
          Cloudflare, Fail2Ban, PostgreSQL и Redis — для проектов с реальным трафиком,
          атаками и высокой нагрузкой.
        </p>

        <div class="hero-stats" aria-label="Ключевые направления">
          <div v-for="stat in heroStats" :key="stat.value" class="hero-stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>

        <div class="hero-tools" aria-label="Инструменты">
          <div v-for="tool in heroTools" :key="tool.name" class="tool-tile">
            <ToolIcon :label="tool.name" :src="tool.icon" :tone="tool.tone" />
            <span>{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
