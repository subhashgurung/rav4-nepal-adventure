import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ultra-dark theme
        'abyss': '#050505',
        'void': '#0a0a0a',
        'charcoal': '#141414',
        'slate-mist': 'rgba(255, 255, 255, 0.05)',
        'slate-mist-hover': 'rgba(255, 255, 255, 0.1)',
        // Toyota Racing Red
        'toyota-red': '#EB1C23',
        'toyota-red-dark': '#C41820',
        'toyota-red-glow': 'rgba(235, 28, 35, 0.3)',
      },
      fontFamily: {
        'headline': ['Rajdhani', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      backdropBlur: {
        'xs': '2px',
        '3xl': '64px',
      },
      animation: {
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scrollPulse: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(235, 28, 35, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(235, 28, 35, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
