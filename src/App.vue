<script setup lang="ts">
import ContactSection from './components/ContactSection.vue'
import ExpertiseSection from './components/ExpertiseSection.vue'
import HeroSection from './components/HeroSection.vue'
import PinnedProcess from './components/PinnedProcess.vue'
import PricingSection from './components/PricingSection.vue'
import PaymentSection from './components/PaymentSection.vue'
import SecuritySection from './components/SecuritySection.vue'
import ServicesSection from './components/ServicesSection.vue'
import SiteHeader from './components/SiteHeader.vue'
import ToolMarquee from './components/ToolMarquee.vue'
import WelcomeOverlay from './components/WelcomeOverlay.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <WelcomeOverlay />
  <div class="matrix-bg" aria-hidden="true"></div>
  <SiteHeader />
  <main>
    <HeroSection />
    <ToolMarquee />
    <ExpertiseSection />
    <ServicesSection />
    <PinnedProcess />
    <SecuritySection />
    <PricingSection />
    <PaymentSection />
    <ContactSection />
  </main>
</template>
