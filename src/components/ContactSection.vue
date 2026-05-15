<script setup lang="ts">
import { contacts } from '../content/contacts'
import SectionShell from './SectionShell.vue'
</script>

<template>
  <SectionShell id="contacts" eyebrow="Контакты" title="Связаться со мной" muted-title="и обсудить задачу_">
    <div class="contacts-panel panel-glow" data-reveal>
      <div>
        <h3>Za1ka</h3>
        <p>
          Напишите, что нужно настроить или проверить: сервер, домен, стек, симптомы,
          дедлайн и доступы, которые можно будет выдать после согласования.
        </p>
      </div>

      <div class="contact-links">
        <a v-for="contact in contacts" :key="contact.label" :href="contact.href" target="_blank" rel="noreferrer">
          <span>{{ contact.label }}</span>
          <strong>{{ contact.value }}</strong>
        </a>
      </div>
    </div>
  </SectionShell>
</template>
