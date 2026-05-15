import type { ExpertiseTab } from './types'

export const expertiseTabs: ExpertiseTab[] = [
  {
    id: 'production',
    title: 'Production',
    eyebrow: 'серверы и окружение',
    heading: 'Production-серверы, деплой и стабильная эксплуатация',
    summary:
      'Готовлю Linux-инфраструктуру под реальные проекты: сайты, API, CRM, ботов, панели и сервисы с живым трафиком.',
    points: [
      'Настройка VPS/VDS/dedicated серверов, Nginx/Apache, PHP-FPM, Node.js, Python и SSL.',
      'Docker Compose, базовая k8s/k3s-подготовка, Helm и понятная структура окружений.',
      'Мониторинг, логи, cron, backup, очереди, systemd-сервисы и проверяемые регламенты.',
      'Работа с Redis, MySQL/PostgreSQL, DNS, CDN, Cloudflare и reverse proxy.',
    ],
    tools: ['Linux', 'Nginx', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'Redis', 'MySQL'],
  },
  {
    id: 'security',
    title: 'Security',
    eyebrow: 'hardening и Zero Trust',
    heading: 'Кибербезопасность сервера и публичного периметра',
    summary:
      'Усиливаю доступы, firewall, WAF, секреты и сетевые политики так, чтобы инфраструктура была понятной и управляемой.',
    points: [
      'SSH key-based access, отключение лишнего, sudo-права, сервисные пользователи и аудит доступов.',
      'UFW/iptables, Fail2Ban, Cloudflare WAF, rate limiting, bot-фильтры и защита origin.',
      'TLS, security headers, NetworkPolicy, Cilium и минимальные права для сервисов.',
      'Проверка секретов, CI/CD-практик, контейнеров, зависимостей и базовых supply-chain рисков.',
    ],
    tools: ['UFW', 'iptables', 'Fail2Ban', 'Cloudflare', 'WAF', 'Cilium', 'Vault', 'Trivy'],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    eyebrow: 'инциденты и узкие места',
    heading: 'Диагностика падений, 500/502/504 и высокой нагрузки',
    summary:
      'Разбираю не только симптом, а цепочку причин: логи, сеть, лимиты, upstream, базу, контейнеры и мониторинг.',
    points: [
      'Анализ journalctl, access/error logs, контейнеров, systemd, DNS, SSL и reverse proxy.',
      'Поиск CPU/RAM/I/O bottleneck, медленных SQL-запросов, сетевых задержек и лимитов ядра.',
      'Нагрузочные проверки, k6/wrk/ab, контроль ресурсов и рекомендации по масштабированию.',
      'План предотвращения повторений: алерты, runbook, backup, rollback и наблюдаемость.',
    ],
    tools: ['Grafana', 'Prometheus', 'Loki', 'k6', 'wrk', 'systemd', 'journalctl', 'CEPH'],
  },
  {
    id: 'storage',
    title: 'Storage',
    eyebrow: 'данные, backup, HA',
    heading: 'Хранилища, резервирование и устойчивость данных',
    summary:
      'Помогаю выстроить практичный подход к данным: резервные копии, RAID, объектное/блочное хранилище и проверка восстановления.',
    points: [
      'CEPH, S3-compatible storage, RAID-подходы, snapshot-логика и резервное копирование.',
      'Проверка RPO/RTO, восстановление из backup, хранение конфигов и важных секретов.',
      'Рекомендации по отказоустойчивости дисков, сетей, очередей и stateful-сервисов.',
      'Документирование критичных данных и сценариев восстановления после сбоя.',
    ],
    tools: ['CEPH', 'S3', 'RAID', 'Restic', 'PostgreSQL', 'Redis', 'Snapshots', 'Backups'],
  },
]
