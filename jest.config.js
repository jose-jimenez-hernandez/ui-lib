module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // to test css files with jest
    '\\.(css|less)$': 'identity-obj-proxy',
    // transforms svg
    '^.+\\.svg$': 'jest-svg-transformer',
    // aliases
    '^@settle-ui/(.*)$': '<rootDir>/src/$1',
    '^@settle-ui/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@settle-ui/components/(.*)$': '<rootDir>/src/components/$1',
  },
};
