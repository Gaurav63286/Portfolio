/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background, #050505)',
        surface: '#0c0c0c',
        'surface-hover': '#141414',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          muted: 'var(--accent-muted)',
          glow: 'var(--accent-glow)',
        },
        'accent-contrast': 'var(--accent-contrast)',
        primary: 'var(--text-primary, #F5F5F5)',
        secondary: '#999999',
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.15)',
          subtle: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Syne', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        serif: ['Instrument Serif', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['Space Mono', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.2em',
        mega: '0.35em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
