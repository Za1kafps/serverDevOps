<script setup lang="ts">
import { zeroTrustPrinciples } from '../content/security'
import { securityTools } from '../content/tools'
import SectionShell from './SectionShell.vue'
import ToolIcon from './ToolIcon.vue'
</script>

<template>
  <SectionShell
    id="zero-trust"
    eyebrow="Zero Trust"
    title="Безопасность как базовая часть инфраструктуры,"
    muted-title="а не отдельная галочка_"
    wide
  >
    <div class="security-layout">
      <div class="security-copy panel-glow" data-reveal>
        <p>
          В работах по серверам и DevOps я исхожу из модели Zero Trust: не доверять
          окружению по умолчанию, выдавать минимально нужные права, явно описывать
          сетевые правила и оставлять следы для аудита.
        </p>
        <ul>
          <li v-for="principle in zeroTrustPrinciples" :key="principle">{{ principle }}</li>
        </ul>
      </div>

      <div class="security-tools" data-reveal>
        <article v-for="tool in securityTools" :key="tool.name">
          <ToolIcon :label="tool.name" :src="tool.icon" :tone="tool.tone" />
          <span>{{ tool.name }}</span>
        </article>
      </div>
    </div>
  </SectionShell>
</template>
