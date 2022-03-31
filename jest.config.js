module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // to test css files with jest
    "\\.(css|less)$": "identity-obj-proxy",
    // transforms svg
    "^.+\\.svg$": "jest-svg-transformer",
    // aliases
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
  },
};
