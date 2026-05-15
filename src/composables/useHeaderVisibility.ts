import { onMounted, onUnmounted, ref } from 'vue'

const MIN_SCROLL_BEFORE_HIDE = 320
const SCROLL_DELTA = 14

export function useHeaderVisibility() {
  const isHidden = ref(false)
  const isCompact = ref(false)
  let lastScrollY = 0
  let ticking = false

  const updateHeaderState = () => {
    const currentScrollY = window.scrollY
    const scrollDelta = currentScrollY - lastScrollY

    isCompact.value = currentScrollY > 32

    if (Math.abs(scrollDelta) < SCROLL_DELTA) {
      return
    }

    isHidden.value = currentScrollY > MIN_SCROLL_BEFORE_HIDE && scrollDelta > 0
    lastScrollY = currentScrollY
    ticking = false
  }

  const requestHeaderUpdate = () => {
    if (ticking) {
      return
    }

    ticking = true
    window.requestAnimationFrame(updateHeaderState)
  }

  onMounted(() => {
    lastScrollY = window.scrollY
    updateHeaderState()
    window.addEventListener('scroll', requestHeaderUpdate, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', requestHeaderUpdate)
  })

  return {
    isCompact,
    isHidden,
  }
}
