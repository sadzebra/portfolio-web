// import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'brand-slate': '#8DA1B9',
      'brand-teal': '#95ADB6',
      'brand-mauve': '#CBB3BF',
      'brand-beige': '#DBC7BE',
      'brand-pink': '#EF959C',
      'brand-dark': '#1a1a1a',
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
