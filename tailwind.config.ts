import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ✏️ SPIRITUAL COLOR PALETTE — Edit these to change the entire theme
      colors: {
        void:    '#03020d',
        cosmos:  '#07051a',
        nebula:  '#0d0a2b',
        sacred:  '#f59e0b',   // Gold — primary sacred accent
        lotus:   '#c084fc',   // Violet — secondary
        aura:    '#818cf8',   // Indigo — tertiary
        ether:   '#e0e7ff',   // Ethereal white
        stardust:'#6b7280',
      },
      fontFamily: {
        // ✏️ FONTS — Change in globals.css as well
        display: ['Cinzel', 'serif'],
        body:    ['Crimson Text', 'serif'],
        code:    ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow':     'spin 20s linear infinite',
        'spin-reverse':  'spin-reverse 15s linear infinite',
        'float':         'float 6s ease-in-out infinite',
        'pulse-glow':    'pulse-glow 3s ease-in-out infinite',
        'blink':         'blink 1.2s step-end infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-sacred': 'linear-gradient(135deg, #f59e0b 0%, #c084fc 50%, #818cf8 100%)',
        'gradient-cosmos': 'linear-gradient(135deg, #07051a 0%, #0d0a2b 100%)',
      },
    },
  },
  plugins: [],
}

export default config
