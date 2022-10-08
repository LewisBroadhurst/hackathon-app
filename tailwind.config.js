/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '767px',
      lg: '1050px',
      xl: '1440px',
      xxl: '1750px'
    },
    extend: {
      colors: {
        cMono100: "#F8F9FA",
        cMono200: "#E9ECEF",
        cMono300: "#DEE2E6",
        cMono400: "#CED4DA",
        cMono500: "#6C757D",
        cMono600: "#495057",
        cMono700: "#343A40",
        cMono800: "#212529",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  }
}