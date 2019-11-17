module.exports = {
  testEnvironment: 'jest-environment-node',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/node_modules/**',
    '!<rootDir>/coverage/**'
  ],
  projects: [
    {
      displayName: 'test'
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testMatch: ['<rootDir>/**/*.js']
    }
  ]
}
