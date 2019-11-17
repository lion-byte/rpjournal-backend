module.exports = {
  displayName: 'backend',
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/coverage/**'
  ]
}
