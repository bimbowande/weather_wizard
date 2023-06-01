/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       
      colors: {
        bgColor: "#243c5a",
      },
      fontFamily: {
        rubik: ["var(--rubik-font)", ...fontFamily.sans],
        archivo: ["var(--archivo-font)", ...fontFamily.sans],
        kanit: ["var(--kanit-font)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
