const { createCjsPreset } = require('jest-preset-angular/presets');

module.exports = {
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/app/**/*.ts', '!src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/main.ts',
    '/src/app/app.config.ts',
    '/src/app/app.routes.ts',
  ],
};