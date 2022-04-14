const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./config/colors.js').colors;

module.exports = {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      default: [...defaultTheme.fontFamily.sans],
      display: ['Nunito', ...defaultTheme.fontFamily.sans],
      body: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: Object.assign(colors, {
        primary: colors['deep-violet'],
        secondary: colors['dark-blue'],
        tertiary: colors.gray,
        error: colors.red,
        warning: colors.yellow,
        success: colors.green,
        info: colors['titan-white'],
        text: colors.gray,
      }),
    },
  },
  plugins: [],
};
