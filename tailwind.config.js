/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0b0f',
          soft: '#0f1117',
          card: '#12141c',
          elevated: '#171a24',
        },
        line: 'rgba(255,255,255,0.08)',
        accent: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
          glow: 'rgba(99,102,241,0.35)',
        },
        ink: {
          DEFAULT: '#e6e8ee',
          soft: '#a1a7b8',
          faint: '#6b7180',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.4), 0 8px 30px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(99,102,241,0.4), 0 10px 40px rgba(99,102,241,0.25)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
