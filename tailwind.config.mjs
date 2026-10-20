/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#09090b',         // Obsidiana profunda
          card: '#121215',       // Superficie sutil
          cardHover: '#18181b',  // Hover refinado
          border: '#27272a',     // Borde milimétrico
          borderHover: '#3f3f46',
          text: '#fafafa',       // Blanco puro
          muted: '#a1a1aa',      // Gris neutro
          accent: '#10b981',     // Esmeralda técnico
          accentHover: '#34d399',
          accentMuted: 'rgba(16, 185, 129, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      }
    },
  },
  plugins: [],
}
