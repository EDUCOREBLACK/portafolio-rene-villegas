/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          card: '#1e293b',
          accent: '#38bdf8', // Celeste tecnológico
          text: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}
