/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cruip Open PRO Palette
        pro: {
          bg: '#030712',          // gray-950
          surface: '#0f172a',     // slate-900
          card: '#111827',        // gray-900
          cardHover: '#1f2937',   // gray-800
          border: 'rgba(55, 65, 81, 0.6)',  // gray-700/60
          borderHover: 'rgba(99, 102, 241, 0.5)',
          text: '#f3f4f6',        // gray-100
          muted: '#9ca3af',       // gray-400
          primary: '#6366f1',     // indigo-500
          primaryHover: '#4f46e5', // indigo-600
          primaryLight: '#818cf8', // indigo-400
          violet: '#8b5cf6',      // violet-500
        },
        // Backwards-compatible aliases mapping to Open PRO tokens
        cloud: {
          bg: 'var(--bg-main)',
          card: 'var(--card-main)',
          cardHover: 'var(--card-hover)',
          border: 'var(--border-main)',
          borderLight: 'var(--border-hover)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
          azure: '#6366f1',       // Open PRO indigo
          aws: '#f59e0b',
          green: '#10b981',
          red: '#ef4444',
          yellow: '#f59e0b',
        },
        robb: {
          bg: '#f4f9fc',
          line: '#7f00e0',
          fill: '#aadcec',
          text: '#0f1b61',
          subtext: '#73bbc5',
        }
      },
      fontFamily: {
        serif: ['Bitter', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
