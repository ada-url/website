import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  srcDir: './astro',
  site: 'https://www.ada-url.com',
  vite: {
    build: {
      rollupOptions: {
        // For some reason, the build crashes without this
        external: ['sharp'],
      },
    },
  },
  integrations: [
    starlight({
      // https://starlight.astro.build/reference/configuration
      title: 'Ada URL',
      social: {
        github: 'https://github.com/ada-url/ada',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: ['introduction', 'installation'],
        },
        {
          label: 'CLI',
          items: [
            {
              label: 'Introduction',
              slug: 'cli',
            },
            {
              label: 'Performance',
              slug: 'cli/performance',
            },
          ],
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
            {
              label: 'LuaJIT client',
              slug: 'clients/luajit',
            },
            {
              label: 'D client',
              slug: 'clients/d',
            },
          ],
        },
      ],
      components: {
        SiteTitle: './astro/components/SiteTitle.astro',
      },
      favicon: './favicon-32x32.png',
      logo: {
        light: './astro/assets/logo-light.svg',
        dark: './astro/assets/logo-dark.svg',
        replacesTitle: true,
      },
      customCss: [
        // Relative path to your custom CSS file
        './astro/custom.css',
      ],
      editLink: {
        baseUrl: 'https://github.com/ada-url/website/edit/main',
      },
      titleDelimiter: '-',
      credits: false,
    }),
    react(),
    tailwind(),
  ],
})
