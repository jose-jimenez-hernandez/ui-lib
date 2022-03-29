const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@settle-ui': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};

