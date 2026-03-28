/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'polarity-dark': '#0a0e1a',
        'polarity-darker': '#060911',
        'polarity-card': '#0f172a',
        'polarity-border': '#1e293b',
        'polarity-accent': '#3b82f6',
        'polarity-accent-hover': '#2563eb',
        'polarity-green': '#10b981',
        'polarity-yellow': '#f59e0b',
        'polarity-purple': '#8b5cf6',
        'polarity-pink': '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
