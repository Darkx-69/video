/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: 'var(--space)',
        navy: 'var(--navy)',
        'atmos-blue': 'var(--atmos-blue)',
        'sun-amber': 'var(--sun-amber)',
        'ir-coral': 'var(--ir-coral)',
        mint: 'var(--mint)',
        'app-text': 'var(--text)',
        'app-muted': 'var(--text-muted)',
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1360px',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
          '50%': { opacity: '0.8', transform: 'translateY(-4px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 8px rgba(77, 163, 255, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px rgba(77, 163, 255, 0.8))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
