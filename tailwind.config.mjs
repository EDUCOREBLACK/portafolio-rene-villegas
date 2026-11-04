/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Kitu Black & White Minimalist Scheme
        brand: {
          bg: '#07080a',         // Obsidiana profunda
          card: '#0f1118',       // Superficie sutil
          cardHover: '#151824',  // Hover refinado
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.28)',
          text: '#f8fafc',       // Blanco puro
          muted: '#94a3b8',      // Gris neutro
          accent: '#ffffff',     // Monocromo blanco
          accentHover: '#e2e8f0',
          accentMuted: 'rgba(255, 255, 255, 0.08)',
        },
        // Retrocompatibilidad con tokens de componentes existentes
        pro: {
          bg: '#07080a',
          surface: '#0f1118',
          card: '#0f1118',
          cardHover: '#151824',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.25)',
          text: '#f8fafc',
          muted: '#94a3b8',
          primary: '#ffffff',
          primaryHover: '#e2e8f0',
          primaryLight: '#ffffff',
          violet: '#ffffff',
        },
        cloud: {
          bg: 'var(--bg-main)',
          card: 'var(--card-main)',
          cardHover: 'var(--card-hover)',
          border: 'var(--border-main)',
          borderLight: 'var(--border-hover)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
          azure: '#ffffff',
          aws: '#ffffff',
          green: '#ffffff',
          red: '#ef4444',
          yellow: '#facc15',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        serif: ['Outfit', 'sans-serif'],
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
