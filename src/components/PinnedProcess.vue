<script setup lang="ts">
import { processSteps } from '../content/process'
import SectionShell from './SectionShell.vue'
</script>

<template>
  <SectionShell id="process" eyebrow="Процесс" title="Понятный путь" muted-title="от заявки до стабильного production_">
    <div class="pinned-process">
      <div class="pinned-process__sticky" data-reveal>
        <p class="code-line">&lt;workflow&gt;</p>
        <h3>От заявки до устойчивой инфраструктуры</h3>
        <p>
          Работаю прозрачно: сначала фиксируем контур и риски, затем проверяем
          факты, вносим изменения и оставляем инфраструктуру в состоянии, которое
          можно сопровождать дальше.
        </p>
      </div>

      <div class="process-steps">
        <article v-for="(step, index) in processSteps" :key="step.title" data-reveal>
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <h4>{{ step.title }}</h4>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </SectionShell>
</template>
