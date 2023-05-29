import { siteConfig } from '@/config/site'
import { absoluteUrl } from '@/lib/utils'
import { allDocuments } from 'contentlayer/generated'
import { format } from 'date-fns'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = format(new Date(), 'yyyy-MM-dd')
  const documents = allDocuments.map((document) => ({
    url: absoluteUrl(document._raw.flattenedPath),
    lastModified,
  }))

  const staticPages = [siteConfig.url, absoluteUrl('/playground')].map((url) => ({
    url,
    lastModified,
  }))

  return [...staticPages, ...documents]
}
