const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    // config.resolve.alias = {
    //   ...config.resolve?.alias,
    //   "@settle-ui/*": path.resolve(__dirname, "../src/"),
    // };

    // config.resolve.roots = [
    //   path.resolve(__dirname, "../public"),
    //   "node_modules",
    // ];

    return config;
  },
};
