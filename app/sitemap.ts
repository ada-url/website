import { siteConfig } from '@/config/site'
import { allDocuments } from 'contentlayer/generated'
import { format } from 'date-fns'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = format(new Date(), 'yyyy-MM-dd')
  const documents = allDocuments.map((document) => ({
    url: `${siteConfig.url}/${document._raw.flattenedPath}`,
    lastModified,
  }))

  return [{ url: siteConfig.url, lastModified }, ...documents]
}
