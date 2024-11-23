/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          muted: 'var(--color-accent-muted)',
          hover: 'var(--color-accent-hover)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          muted: 'var(--color-background-muted)',
          elevated: 'var(--color-background-elevated)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}