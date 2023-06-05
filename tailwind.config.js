/** @type {import('tailwindcss').Config} */

const { fontFamily, defaultTheme } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
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
