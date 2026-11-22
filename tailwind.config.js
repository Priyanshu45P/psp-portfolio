/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070b14', panel: '#0f172a', line: 'rgba(255,255,255,0.09)',
        accent: '#67e8f9', electric: '#3b82f6', violet: '#8b5cf6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'float-slow': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        'glow-pulse': { '0%, 100%': { opacity: '.45' }, '50%': { opacity: '.8' } },
      },
      animation: { 'float-slow': 'float-slow 6s ease-in-out infinite', 'glow-pulse': 'glow-pulse 7s ease-in-out infinite' },
    },
  },
  plugins: [],
}
