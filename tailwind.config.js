/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '1050px',
      xl: '1440px'
    },
    extend: {},
  },
  plugins: [],
}