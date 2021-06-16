const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Montserrat", ...defaultTheme.fontFamily.sans],
      body: ["Open Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "settle-bakground": "#F9F9FF",
        "settle-gray": {
          50: "#F3F4F4",
          100: "#E7E9EA",
          200: "#C3C8C9",
          300: "#9FA7A9",
          400: "#586569",
          500: "#102328",
          600: "#0E2024",
          700: "#0C1A1E",
          800: "#0A1518",
          900: "#081114",
        },
        "settle-blue": {
          50: "#f2f6ff",
          100: "#e6edff",
          200: "#bfd1fe",
          300: "#99b6fe",
          400: "#4d7ffd",
          500: "#0048fc",
          600: "#0041e3",
          700: "#0036bd",
          800: "#002b97",
          900: "#00237b",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
