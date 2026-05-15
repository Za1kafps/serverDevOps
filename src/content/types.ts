export type NavItem = {
  label: string
  href: string
}

export type Tool = {
  name: string
  icon?: string
  tone?: 'green' | 'blue' | 'yellow' | 'pink' | 'cyan'
}

export type HeroStat = {
  value: string
  label: string
}

export type Service = {
  id: string
  title: string
  price: string
  lead: string
  description: string
  includes: string[]
  clientGets: string[]
  requirements: string[]
  stack: string[]
}

export type PricingPlan = {
  title: string
  price: string
  period: string
  accent: string
  features: string[]
  image?: string
  imageAlt: string
}

export type ExpertiseTab = {
  id: string
  title: string
  eyebrow: string
  heading: string
  summary: string
  points: string[]
  tools: string[]
}

export type PaymentDetail = {
  label: string
  value: string
  hint: string
  details?: Array<{
    label: string
    value: string
  }>
}

export type ContactLink = {
  label: string
  value: string
  href: string
}
