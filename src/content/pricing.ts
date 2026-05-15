import type { PricingPlan } from './types'

export const pricingPlans: PricingPlan[] = [
  {
    title: 'Linux-сервер под ключ',
    price: '11 000 ₽',
    period: 'Единоразово',
    accent: 'production ready',
    image: '',
    imageAlt: 'Кейс подготовки Linux-сервера',
    features: [
      'Подготовка VPS/VDS или dedicated сервера.',
      'SSH по ключам, firewall, Fail2Ban и базовый hardening.',
      'Nginx/Apache, SSL, окружение проекта.',
      'Docker/Docker Compose или базовая k8s-подготовка.',
      'Рекомендации по эксплуатации и расширению.',
    ],
  },
  {
    title: 'DevOps-задача',
    price: '5 000 ₽',
    period: 'От задачи',
    accent: 'deploy / monitor / optimize',
    image: '',
    imageAlt: 'Кейс DevOps-настройки',
    features: [
      'Развертывание сервиса или исправление окружения.',
      'Kubernetes, Helm, Docker, Terraform и облака.',
      'Мониторинг Grafana/Prometheus и алерты.',
      'Аудит конфигураций, TLS, секретов и CI/CD.',
      'Фокус на корневую причину, а не косметику.',
    ],
  },
  {
    title: 'Отказоустойчивость',
    price: '3 000 ₽',
    period: 'Единоразово',
    accent: 'load & resilience',
    image: '',
    imageAlt: 'Кейс проверки отказоустойчивости',
    features: [
      'Нагрузочные сценарии под ваш сервис.',
      'Проверка фильтрации, лимитов и реакции сервера.',
      'Анализ ресурсов CPU/RAM/network.',
      'Рекомендации по k8s, backup, RAID и масштабированию.',
      'Отчет по узким местам и приоритетам исправления.',
    ],
  },
]
