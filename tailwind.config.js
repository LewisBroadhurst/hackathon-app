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
    extend: {
      colors: {
        cWhite100: "0753C5",
        cGrey200: "0753C5",
        cGrey300: "0753C5",
        cGrey400: "0753C5",
        cBlack500: "0753C5",
        cBlue100: "D8E7FE",
        cBlue200: "9DC3FB",
        cBlue300: "4E92F9",
        cBlue400: "0964EC",
        cBlue500: "0753C5",
        cOrange100: "FFD6AD",
        cOrange200: "FFC285",
        cOrange300: "FFA347",
        cOrange400: "FF8811",
        cOrange500: "F57A00",
      }
    },
  },
  plugins: [],
}