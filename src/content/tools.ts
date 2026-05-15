import type { Tool } from './types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const toolIconByName: Record<string, string> = {
  Linux: publicAsset('svg/tools/linux.svg'),
  Nginx: publicAsset('svg/tools/nginx.svg'),
  Docker: publicAsset('svg/tools/docker.svg'),
  Kubernetes: publicAsset('svg/tools/kubernetes.svg'),
  k8s: publicAsset('svg/tools/kubernetes.svg'),
  Helm: publicAsset('svg/tools/helm.svg'),
  Terraform: publicAsset('svg/tools/terraform.svg'),
  Cloudflare: publicAsset('svg/tools/cloudflare.svg'),
  WAF: publicAsset('svg/tools/waf.svg'),
  UFW: publicAsset('svg/tools/ufw.svg'),
  iptables: publicAsset('svg/tools/iptables.svg'),
  Fail2Ban: publicAsset('svg/tools/fail2ban.svg'),
  Cilium: publicAsset('svg/tools/cilium.svg'),
  SonarQube: publicAsset('svg/tools/sonarqube.svg'),
  Trivy: publicAsset('svg/tools/trivy.svg'),
  Vault: publicAsset('svg/tools/vault.svg'),
  Grafana: publicAsset('svg/tools/grafana.svg'),
  Prometheus: publicAsset('svg/tools/prometheus.svg'),
  CEPH: publicAsset('svg/tools/ceph.svg'),
  S3: publicAsset('svg/tools/s3.svg'),
  RAID: publicAsset('svg/tools/raid.svg'),
  Restic: publicAsset('svg/tools/backup.svg'),
  Backups: publicAsset('svg/tools/backup.svg'),
  Snapshots: publicAsset('svg/tools/snapshot.svg'),
  PostgreSQL: publicAsset('svg/tools/postgresql.svg'),
  MySQL: publicAsset('svg/tools/mysql.svg'),
  Redis: publicAsset('svg/tools/redis.svg'),
  AWS: publicAsset('svg/tools/aws.svg'),
  'Google Cloud': publicAsset('svg/tools/google-cloud.svg'),
  'Let’s Encrypt': publicAsset('svg/tools/ssl.svg'),
  TLS: publicAsset('svg/tools/ssl.svg'),
  'Zero Trust': publicAsset('svg/tools/zero-trust.svg'),
  systemd: publicAsset('svg/tools/systemd.svg'),
  journalctl: publicAsset('svg/tools/logs.svg'),
  k6: publicAsset('svg/tools/load-test.svg'),
  wrk: publicAsset('svg/tools/load-test.svg'),
  ab: publicAsset('svg/tools/load-test.svg'),
}

export const heroTools: Tool[] = [
  { name: 'Linux', icon: toolIconByName.Linux, tone: 'yellow' },
  { name: 'Nginx', icon: toolIconByName.Nginx, tone: 'green' },
  { name: 'Docker', icon: toolIconByName.Docker, tone: 'blue' },
  { name: 'Kubernetes', icon: toolIconByName.Kubernetes, tone: 'cyan' },
  { name: 'Terraform', icon: toolIconByName.Terraform, tone: 'green' },
  { name: 'Cloudflare', icon: toolIconByName.Cloudflare, tone: 'yellow' },
  { name: 'WAF', icon: toolIconByName.WAF, tone: 'pink' },
  { name: 'CEPH', icon: toolIconByName.CEPH, tone: 'cyan' },
]

export const securityTools: Tool[] = [
  { name: 'UFW', icon: toolIconByName.UFW, tone: 'green' },
  { name: 'iptables', icon: toolIconByName.iptables, tone: 'cyan' },
  { name: 'Fail2Ban', icon: toolIconByName.Fail2Ban, tone: 'yellow' },
  { name: 'Cilium', icon: toolIconByName.Cilium, tone: 'blue' },
  { name: 'SonarQube', icon: toolIconByName.SonarQube, tone: 'pink' },
  { name: 'Trivy', icon: toolIconByName.Trivy, tone: 'green' },
  { name: 'Vault', icon: toolIconByName.Vault, tone: 'yellow' },
  { name: 'Grafana', icon: toolIconByName.Grafana, tone: 'cyan' },
  { name: 'CEPH', icon: toolIconByName.CEPH, tone: 'blue' },
  { name: 'Prometheus', icon: toolIconByName.Prometheus, tone: 'pink' },
]

export const toolMarqueeItems = [
  'Linux',
  'Nginx',
  'Docker',
  'Kubernetes',
  'Helm',
  'Terraform',
  'CEPH',
  'Cloudflare',
  'WAF',
  'Fail2Ban',
  'UFW',
  'iptables',
  'Cilium',
  'Grafana',
  'Prometheus',
  'SonarQube',
  'Trivy',
  'Vault',
  'PostgreSQL',
  'MySQL',
  'Redis',
  'AWS',
  'Google Cloud',
]

export function getToolIcon(toolName: string) {
  return toolIconByName[toolName] ?? ''
}
