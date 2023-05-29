const publicVercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL
const vercelUrl = publicVercelUrl ? `https://${publicVercelUrl}` : null
const url = vercelUrl ?? 'http://localhost:3000'

export const siteConfig = {
  name: 'Ada URL',
  url,
  description:
    'WHATWG Compliant URL parser written with focus on compliance, performance and security across multiple platforms and languages.',
  links: {
    github: 'https://github.com/ada-url/ada',
  },
}

export type SiteConfig = typeof siteConfig
