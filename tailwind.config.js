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
        cWhite100: "#F9F9FB",
        cGrey200: "#E5E5F5",
        cGrey300: "#ADADC2",
        cGrey400: "#2A2A40",
        cBlack500: "#070627",

        cBlue100: "#D8E7FE",
        cBlue200: "#9DC3FB",
        cBlue300: "#4E92F9",
        cBlue400: "#0964EC",
        cBlue500: "#0753C5",

        cOrange100: "#FFD6AD",
        cOrange200: "#FFC285",
        cOrange300: "#FFA347",
        cOrange400: "#FF8811",
        cOrange500: "#F57A00",

        cGreen100: "#ECFEEC",
        cGreen200: "#C5FCC7",
        cGreen300: "#A2FAA3",
        cGreen400: "#77F877",
        cGreen500: "#3DF53D",

        cYellow100: "#FDFBC4",
        cYellow200: "#FCF99C",
        cYellow300: "#FBF774",
        cYellow400: "#FAF338",
        cYellow500: "#ECE509",
      }
    },
  },
  plugins: [],
}