<script setup lang="ts">
defineProps<{
  label?: string
  imageSrc?: string
  imageAlt?: string
  compact?: boolean
}>()
</script>

<template>
  <div class="photo-placeholder" :class="{ 'photo-placeholder--compact': compact }">
    <img v-if="imageSrc" class="photo-placeholder__image" :src="imageSrc" :alt="imageAlt ?? label ?? ''" loading="lazy" />
    <div v-else class="terminal-window" aria-label="Консоль инфраструктуры">
      <div class="terminal-window__bar">
        <span class="terminal-window__dot terminal-window__dot--red"></span>
        <span class="terminal-window__dot terminal-window__dot--yellow"></span>
        <span class="terminal-window__dot terminal-window__dot--green"></span>
        <strong>serverdev-shell</strong>
      </div>

      <div class="terminal-window__body">
        <p><span>root@control-plane-01:~#</span> kubectl get pods -A</p>

        <div class="terminal-window__table">
          <span>NAMESPACE</span>
          <span>NAME</span>
          <span>READY</span>
          <span>STATUS</span>
          <span>RESTARTS</span>
          <span>AGE</span>
          <span>kube-system</span>
          <span>cilium-8zmtm</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>31d</span>
          <span>kube-system</span>
          <span>cilium-operator-5d8dbd65d7-6qqfd</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>31d</span>
          <span>infra</span>
          <span>nginx-gateway-7d8f9c6f4d-rk2qx</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>14d</span>
          <span>security</span>
          <span>fail2ban-agent-9c77d8d78-w4n9g</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>14d</span>
          <span>monitoring</span>
          <span>grafana-stack-65b5ccff88-hv8tp</span>
          <span>2/2</span>
          <strong>Ready</strong>
          <span>1</span>
          <span>9d</span>
          <span>storage</span>
          <span>ceph-mon-a-6fb8d95b8f-j7b42</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>21d</span>
          <span>storage</span>
          <span>ceph-osd-0-6f7f8c7c86-zr5x2</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>21d</span>
          <span>database</span>
          <span>postgres-primary-0</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>18d</span>
          <span>cache</span>
          <span>redis-master-0</span>
          <span>1/1</span>
          <strong>Running</strong>
          <span>0</span>
          <span>18d</span>
        </div>

        <p class="terminal-window__muted"># ведем споры по построению микросервисной архитектуры...</p>
        <p><span>root@control-plane-01:~#</span> cilium status</p>
        <div class="terminal-window__status">
          <span>Cilium:</span>
          <strong>OK</strong>
          <span>Operator:</span>
          <strong>OK</strong>
          <span>Envoy DaemonSet:</span>
          <em>disabled</em>
          <span>Hubble Relay:</span>
          <em>disabled</em>
          <span>DaemonSet:</span>
          <span>cilium</span>
          <span>Deployment:</span>
          <span>cilium-operator</span>
          <span>Image versions:</span>
          <span>cilium 1.18.2</span>
        </div>
      </div>
    </div>
  </div>
</template>
