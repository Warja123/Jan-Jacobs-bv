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
      },
      colors: {
        lime: {
          50:  '#f5fbea',
          100: '#e8f5d0',
          200: '#d2eba2',
          300: '#b8dc6b',
          400: '#a0ce47',
          500: '#8dc63f',
          600: '#72a830',
          700: '#578526',
          800: '#426520',
          900: '#35521c',
          950: '#1c2e0d',
        },
        dark: {
          50:  '#f5f5f5',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#a8a8a8',
          400: '#6e6e6e',
          500: '#4a4a4a',
          600: '#333333',
          700: '#242424',
          800: '#1a1a1a',
          900: '#141414',
          950: '#0a0a0a',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
