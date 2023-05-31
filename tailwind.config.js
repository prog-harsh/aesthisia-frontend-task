/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      ...colors,
      offblack: "#020100",
      offcyan: "#08A593",
      lightGrey: "#667085",
      backgroundColor: "#1E1E1E",
    }
  },
  plugins: [],
}

