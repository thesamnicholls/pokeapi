module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/**', '!**/node_modules/**', '!**/vendor/**'],
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
}
