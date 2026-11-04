/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cloud: {
          bg: '#0b0f19',         // Azure / Cloud deep obsidian
          card: '#111827',       // Terminal & card background
          cardHover: '#1e293b',
          border: '#1f293d',     // Subtle console border
          borderLight: '#334155',
          text: '#f8fafc',       // High contrast white
          muted: '#94a3b8',      // Slate muted text
          azure: '#38bdf8',      // Azure technological cyan
          azureDark: '#0284c7',
          aws: '#f59e0b',        // Subtle AWS warm gold
          green: '#10b981',      // Terminal green prompt
          red: '#ef4444',
          yellow: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
