<script setup lang="ts">
import { ref } from 'vue'
import { services } from '../content/services'
import SectionShell from './SectionShell.vue'
import ToolBadge from './ToolBadge.vue'

const activeId = ref(services[0]?.id ?? '')
const activeService = () => services.find((service) => service.id === activeId.value) ?? services[0]
</script>

<template>
  <SectionShell
    id="services"
    eyebrow="Услуги"
    title="Структура услуг,"
    muted-title="которую можно расширять без переписывания верстки_"
    wide
  >
    <div class="services-layout">
      <aside class="service-tabs" data-reveal aria-label="Список услуг">
        <button
          v-for="service in services"
          :key="service.id"
          type="button"
          :class="{ 'is-active': service.id === activeId }"
          @click="activeId = service.id"
        >
          <span>{{ service.title }}</span>
          <strong>{{ service.price }}</strong>
        </button>
      </aside>

      <article class="service-detail panel-glow" data-reveal>
        <div class="service-detail__top">
          <div>
            <p class="eyebrow">• Выбранная услуга</p>
            <h3>{{ activeService().title }}</h3>
            <p>{{ activeService().lead }}</p>
          </div>
          <strong>{{ activeService().price }}</strong>
        </div>

        <p class="service-description">{{ activeService().description }}</p>

        <div class="service-columns">
          <div>
            <h4>Что входит</h4>
            <ul>
              <li v-for="item in activeService().includes" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div>
            <h4>Что получает клиент</h4>
            <ul>
              <li v-for="item in activeService().clientGets" :key="item">{{ item }}</li>
            </ul>

            <h4>Нужно для заказа</h4>
            <ol>
              <li v-for="item in activeService().requirements" :key="item">{{ item }}</li>
            </ol>
          </div>
        </div>

        <div class="badges-row">
          <ToolBadge v-for="item in activeService().stack" :key="item" :label="item" :show-icon="false" />
        </div>
      </article>
    </div>
  </SectionShell>
</template>
