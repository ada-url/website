import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  srcDir: './astro',
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
      ],
    }),
  ],
})
