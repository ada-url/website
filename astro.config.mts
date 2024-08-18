import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  srcDir: './astro',
  integrations: [
    starlight({
      // https://starlight.astro.build/reference/configuration
      title: 'Ada URL',
      social: {
        github: 'https://github.com/ada-url/ada',
      },
    }),
  ],
})
