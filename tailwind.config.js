const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./config/colors.js').colors;

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      default: [...defaultTheme.fontFamily.sans],
      display: ['Nunito', ...defaultTheme.fontFamily.sans],
      body: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        ...colors,
        primary: colors['deep-violet'],
        secondary: colors['dark-blue'],
        tertiary: colors.gray,
        error: colors.red,
        warning: colors.red,
        success: colors.green,
        info: colors['titan-white'],
        text: colors.gray,
      },
    },
  },
   safelist: [
     {
       pattern: /(bg|text|border|outline)-(red|green|blue)-(50|100|200|400|500|700)/,
       variants: ['lg', 'hover', 'focus', 'lg:hover'],
     },
  ],
  plugins: [],
};
