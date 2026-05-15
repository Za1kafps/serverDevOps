import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        rootMargin: '0px 0px -4% 0px',
        threshold: 0.04,
      },
    )

    nodes.forEach((node) => observer?.observe(node))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
