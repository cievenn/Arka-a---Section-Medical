/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        kiri: {
          950: '#040812',
          900: '#080d1c',
          800: '#0c1228',
          700: '#141d38',
          panel: 'rgba(12, 20, 45, 0.72)',
          hover: 'rgba(16, 28, 55, 0.85)',
          cyan: '#22d3ee',
          'cyan-soft': '#67e8f9',
          'cyan-glow': 'rgba(34, 211, 238, 0.4)',
        }
      },
      animation: {
        'soft-pulse': 'softPulse 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scan': 'scan 5s ease-in-out infinite',
        'drift': 'drift 30s infinite ease-in-out alternate',
        'glow-pulse': 'glowPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        softPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(16px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { top: '0', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { top: '100%', opacity: '0' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.08' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)', opacity: '0.18' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)', opacity: '0.1' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.08' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      }
    },
  },
  plugins: [],
}
