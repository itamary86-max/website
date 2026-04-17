import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#214b7b',
        'navy-light': '#2a5a8f',
        accent: '#c9a227',
        'accent-dark': '#a5831a',
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
