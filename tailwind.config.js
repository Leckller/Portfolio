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
        },
        leftTo: {
          '0%': {
            filter: 'opacity(0%)',
            transition: 'cubic-bezier(0,.56,1,.23)',
            transform: 'translateX(-500px)',
          },
          '100%': {
            filter: 'opacity(100%)',
          }
        },
        rightTo: {
          '0%': {
            transition: 'cubic-bezier(0,.56,1,.23)',
            transform: 'translateX(0)'
          },
          '70%': {
            filter: 'opacity(0%)'
          },
          '100%': {
            transform: 'translateX(200%)',
          }
        }
      },
      animation: {
        surgir: 'surgir 1s',
        leftTo: 'leftTo 1s',
        rightTo: 'rightTo 1s',
      }
    },
  },
  plugins: [],
}

