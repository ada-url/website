import fs from 'node:fs'
import starlight from '@astrojs/starlight'
import { ExpressiveCodeTheme } from '@astrojs/starlight/expressive-code'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

const darkJsoncString = fs.readFileSync(
  new URL('./src/styles/themes/dark.jsonc', import.meta.url),
  'utf-8',
)
const lightJsoncString = fs.readFileSync(
  new URL('./src/styles/themes/light.jsonc', import.meta.url),
  'utf-8',
)
const darkTheme = ExpressiveCodeTheme.fromJSONString(darkJsoncString)
const lightTheme = ExpressiveCodeTheme.fromJSONString(lightJsoncString)

// https://astro.build/config
export default defineConfig({
  site:
    // TODO: change prod url once approved
    process.env.VERCEL_ENV === 'production'
      ? 'https://ada-url-website.vercel.app/'
      : 'http://localhost:4321/',
  integrations: [
    starlight({
      title: 'Ada URL',
      customCss: ['./src/styles/tailwind.css'],
      social: {
        github: 'https://github.com/ada-url/ada',
      },
      favicon: 'favicon-16x16.png',
      titleDelimiter: '-',
      expressiveCode: {
        themes: [darkTheme, lightTheme],
      },
      components: {
        Head: './src/components/Head.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Introduction',
              slug: 'introduction',
            },
            {
              label: 'Installation',
              slug: 'installation',
            },
          ],
        },
        {
          label: 'CLI',
          autogenerate: {
            directory: 'cli',
          },
        },
        {
          label: 'Supported Languages',
          items: [
            {
              label: 'C++ client',
              slug: 'clients/cpp',
            },
            {
              label: 'Rust client',
              slug: 'clients/rust',
            },
            {
              label: 'Python client',
              slug: 'clients/python',
            },
            {
              label: 'Go client',
              slug: 'clients/go',
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
