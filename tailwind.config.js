const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./config/colors.js').colors;

module.exports = {
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    preflight: true,
  },
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
        warning: colors.red,
        success: colors.green,
        info: colors['titan-white'],
        text: colors.gray,
      }),
      outline: {
        primary: colors['deep-violet'],
        secondary: colors['dark-blue'],
        tertiary: colors.gray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [], 
};
