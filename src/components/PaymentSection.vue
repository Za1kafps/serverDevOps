<script setup lang="ts">
import { ref } from 'vue'
import { paymentDetails } from '../content/payment'
import SectionShell from './SectionShell.vue'

const copiedLabel = ref('')

async function copyPaymentValue(label: string, value: string) {
  try {
    await navigator.clipboard.writeText(value)
    copiedLabel.value = label
    window.setTimeout(() => {
      if (copiedLabel.value === label) {
        copiedLabel.value = ''
      }
    }, 1600)
  } catch {
    copiedLabel.value = ''
  }
}
</script>

<template>
  <SectionShell id="payment" eyebrow="Оплата" title="Реквизиты оплаты" muted-title="для быстрых переводов_">
    <div class="payment-layout">
      <div class="payment-copy panel-glow" data-reveal>
        <p class="code-line">&lt;payment&gt;</p>
        <h3>Реквизиты оплаты_</h3>
        <p>
          Здесь указаны актуальные данные дла оплаты. Так же вы можете совершить пожертвование, буду очень благодарен 
        </p>
      </div>

      <div class="payment-methods" data-reveal>
        <button
          v-for="item in paymentDetails"
          :key="item.label"
          type="button"
          @click="copyPaymentValue(item.label, item.value)"
        >
          <span>{{ item.label }}</span>
          <strong>{{ item.value }}</strong>
          <dl v-if="item.details?.length" class="payment-details">
            <template v-for="detail in item.details" :key="detail.label">
              <dt>{{ detail.label }}</dt>
              <dd>{{ detail.value }}</dd>
            </template>
          </dl>
          <p>{{ item.hint }}</p>
          <em>{{ copiedLabel === item.label ? 'Скопировано' : 'Нажми, чтобы скопировать' }}</em>
        </button>
      </div>
    </div>
  </SectionShell>
</template>
