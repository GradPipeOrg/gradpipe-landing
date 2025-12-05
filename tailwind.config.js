const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Slate Palette (Backgrounds)
        'bg-primary': '#0f172a', // Slate 900
        'bg-secondary': '#1e293b', // Slate 800
        'bg-tertiary': '#334155', // Slate 700

        // Typography Colors
        'text-primary': '#ffffff', // White
        'text-secondary': '#f1f5f9', // Slate 100
        'text-muted': '#cbd5e1', // Slate 300
        'text-subtle': '#94a3b8', // Slate 400

        // Accent Colors (The "Brand" Look)
        'accent-primary': '#4f46e5', // Indigo 600
        'accent-hover': '#4338ca', // Indigo 700

        // Functional Colors
        success: '#10b981', // Emerald 500
        warning: '#f59e0b', // Amber 500
        error: '#ef4444', // Red 500

        // Keeping existing color objects for backward compatibility if needed, 
        // but mapping them to the new system where possible or leaving them as fallback.
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#f3f0ff',
          100: '#e5dbff',
          200: '#d0bfff',
          300: '#b197fc',
          400: '#9775fa',
          500: '#6F42C1',
          600: '#5a32a3',
          700: '#4c2889',
          800: '#3e1f6b',
          900: '#2d1b4e',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      animation: {
        'aurora-fg': 'aurora-fg 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
        'scroll-x': 'scroll-x 40s linear infinite',
      },
      keyframes: {
        'aurora-fg': {
          '0%': { backgroundPosition: '50% 50%, 50% 50%, 50% 50%' },
          '25%': { backgroundPosition: '20% 80%, 80% 20%, 80% 80%' },
          '50%': { backgroundPosition: '80% 20%, 20% 80%, 20% 20%' },
          '75%': { backgroundPosition: '20% 20%, 80% 80%, 80% 20%' },
          '100%': { backgroundPosition: '50% 50%, 50% 50%, 50% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'scroll-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
}
