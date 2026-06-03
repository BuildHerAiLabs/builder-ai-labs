import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#6C63FF',
          lavender: '#CBBEFF',
          pink: '#FF6B8A',
          lilac: '#FAFAFF',
          navy: '#1A1A2E',
        }
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(26, 26, 46, 0.05)',
        'md': '0 4px 12px rgba(26, 26, 46, 0.08)',
        'lg': '0 12px 30px rgba(26, 26, 46, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

export default config
