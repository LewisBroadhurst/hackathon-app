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
        cMono100: "#F8F9FA",
        cMono200: "#DEE2E6",
        cMono300: "#6C757D",
        cMono400: "#343A40",
        cMono500: "#212529",

        cBlue100: "#DAF0FF",
        cBlue200: "#C2E8FF",
        cBlue300: "#B3E2FF",
        cBlue400: "#A7DDFF",
        cBlue500: "#95D2F8",

        cOrange100: "#FFE961",
        cOrange200: "#FFDA61",
        cOrange300: "#FFD261",
        cOrange400: "#FFCC61",
        cOrange500: "#FFC361",
      }
    },
  },
  plugins: [],
}