/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)'},
          '100%': { opacity: '1', transform: 'translateY(0)'},
        },
        skillbar: {
          "0%": { width: "0%" },
          "100%": { width: 'var(--target-width)' },
        },
      },
      animation: {
        skillbar: "skillbar 1.5s ease-out forwards",
        fadeIn: 'fadeIn 0.3s ease-out forwards'
      }
    },
  },
  plugins: [],
  safelist: [
    'animate-skillbar',
    'open',
    'modal-content',
    'modal-open',
    'modal-open',
    'w-48',
    'mx-auto',
    'mb-4',
    'rounded-lg',
    'text-2xl',
    'font-bold',
    'text-gray-700',
    'dark:text-gray-300'
  ]  
}



