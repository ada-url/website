import starlightPlugin from '@astrojs/starlight-tailwind'
// Generated color palettes
const accent = { 200: '#e1e7ef ', 600: '#0f172a', 900: '#182775', 950: '#131e4f' }
const gray = {
  100: '#f5f6f8',
  200: '#eceef2',
  300: '#c0c2c7',
  400: '#888b96',
  500: '#545861',
  700: '#353841',
  800: '#18181B',
  900: '#030712',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
}
