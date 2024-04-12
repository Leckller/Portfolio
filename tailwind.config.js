/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grayT': 'rgba(216, 216, 216, 0.2)'
      },
      keyframes: {
        surgir: {
          '0%': { filter: 'opacity(0%)' },
          '100%': { filter: 'opacity(100%)' }
        }
      },
      animation: {
        surgir: 'surgir 1s'
      }
    },
  },
  plugins: [],
}

