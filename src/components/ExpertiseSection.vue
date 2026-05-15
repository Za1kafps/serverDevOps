<script setup lang="ts">
import { computed, ref } from 'vue'
import { expertiseTabs } from '../content/expertise'
import SectionShell from './SectionShell.vue'
import ToolBadge from './ToolBadge.vue'

const activeTabId = ref(expertiseTabs[0]?.id ?? '')

const activeTab = computed(() => {
  return expertiseTabs.find((tab) => tab.id === activeTabId.value) ?? expertiseTabs[0]
})
</script>

<template>
  <SectionShell
    id="expertise"
    eyebrow="Опыт"
    title="Практический опыт в production-серверах,"
    muted-title="кибербезопасности и реальной поддержке проектов_"
  >
    <div class="expertise-tabs" data-reveal>
      <button
        v-for="tab in expertiseTabs"
        :key="tab.id"
        type="button"
        :class="{ 'is-active': tab.id === activeTabId }"
        @click="activeTabId = tab.id"
      >
        <span class="expertise-tabs__title">{{ tab.title }}</span>
        <small>{{ tab.eyebrow }}</small>
        <span class="expertise-tabs__tools">{{ tab.tools.slice(0, 3).join(' / ') }}</span>
      </button>
    </div>

    <Transition name="tab-panel" mode="out-in">
      <div :key="activeTab.id" class="expertise-panel">
        <div class="expertise-panel__summary">
          <div>
            <p class="eyebrow">• {{ activeTab.eyebrow }}</p>
            <h3>{{ activeTab.heading }}</h3>
            <p>{{ activeTab.summary }}</p>
          </div>
        </div>

        <div class="expertise-panel__body">
          <ul>
            <li v-for="point in activeTab.points" :key="point">{{ point }}</li>
          </ul>

          <div class="badges-row">
            <ToolBadge v-for="tool in activeTab.tools" :key="tool" :label="tool" :show-icon="false" />
          </div>
        </div>
      </div>
    </Transition>
  </SectionShell>
</template>
