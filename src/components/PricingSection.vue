<script setup lang="ts">
import { pricingPlans } from '../content/pricing'
import CaseImage from './CaseImage.vue'
import SectionShell from './SectionShell.vue'
</script>

<template>
  <SectionShell id="pricing" eyebrow="Тарифы" title="Базовые пакеты" muted-title="и места под будущие кейсы_">
    <div class="pricing-grid">
      <article v-for="plan in pricingPlans" :key="plan.title" class="pricing-card" data-reveal>
        <CaseImage :src="plan.image" :alt="plan.imageAlt" />
        <p class="pricing-card__accent">{{ plan.accent }}</p>
        <h3>{{ plan.title }}</h3>
        <div class="pricing-card__price">
          <strong>{{ plan.price }}</strong>
          <span>/ {{ plan.period }}</span>
        </div>
        <ul>
          <li v-for="feature in plan.features" :key="feature">{{ feature }}</li>
        </ul>
        <a class="button-primary" href="#contacts">Заказать</a>
      </article>
    </div>
  </SectionShell>
</template>
