/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        skillbar: {
          "0%": { width: "0%" },
          "100%": { width: 'var(--target-width)' },
        }
      },
      animation: {
        skillbar: "skillbar 1.5s ease-out forwards"
      }
    },
  },
  plugins: [],
}



