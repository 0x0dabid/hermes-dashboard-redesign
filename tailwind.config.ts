import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: '#080c17',
          panel: '#101828',
          cyan: '#17f2ff',
          purple: '#9f7aea',
          glow: '#2dd4bf',
        },
      },
      boxShadow: {
        holo: '0 0 0 1px rgba(23,242,255,0.28), 0 0 24px rgba(23,242,255,0.12)',
        pulse: '0 0 12px rgba(159,122,234,0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config
