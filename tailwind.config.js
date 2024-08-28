/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'custom-dark': '#050817',
        'custom-purple': '#8f5ffc',
        'custom-gray':'#828096'
      }
    },
  },
  plugins: [],
}