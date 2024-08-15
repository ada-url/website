import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const entries = await getCollection('docs')

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]))

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: 'slug',
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      logo: {
        path: './src/assets/logo.png',
        size: [200, 200],
      },
      bgGradient: [[3, 7, 17]],
      border: { color: [63, 63, 70], width: 20 },
    }
  },
})
