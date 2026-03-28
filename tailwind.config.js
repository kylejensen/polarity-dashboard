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
        'polarity-card': 'rgba(15, 23, 42, 0.6)',
        'polarity-card-solid': '#0f172a',
        'polarity-border': 'rgba(30, 41, 59, 0.5)',
        'polarity-accent': '#3b82f6',
        'polarity-accent-hover': '#2563eb',
        'neon-blue': '#00d4ff',
        'neon-pink': '#ff006e',
        'neon-green': '#39ff14',
        'neon-purple': '#bf00ff',
        'polarity-green': '#10b981',
        'polarity-yellow': '#f59e0b',
        'polarity-purple': '#8b5cf6',
        'polarity-pink': '#ec4899',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
        'arrow-pulse': 'arrow-pulse 1.5s ease-in-out infinite',
        'terminal-scroll': 'terminal-scroll 30s linear infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'neon-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
      },
    },
  },
  plugins: [],
}
