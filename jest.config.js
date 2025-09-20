/**
 * @returns {Promise<import('jest').Config>}
 */
const path = require('path');

module.exports = {
  collectCoverageFrom: [
    '**/src/**/*.component.tsx',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/src/**/*.test.*',
    '!**/src/declarations.d.ts',
    '!**/e2e/**',
  ],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  // Transform ESM modules from specific packages used in tests
  transformIgnorePatterns: ['/node_modules/(?!(@openmrs|@testing-library)/)'],
  moduleNameMapper: {
    '@openmrs/esm-framework': '@openmrs/esm-framework/mock',
    '@openmrs/esm-utils': '@openmrs/esm-framework/mock',
    '@openmrs/esm-react-utils': '@openmrs/esm-react-utils/mock',
    '@openmrs/esm-extensions': '@openmrs/esm-extensions/mock',
    '\\.(s?css)$': 'identity-obj-proxy',
    '^lodash-es/(.*)$': 'lodash/$1',
    'lodash-es': 'lodash',
    '^dexie$': require.resolve('dexie'),
  },
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
  testPathIgnorePatterns: [path.resolve(__dirname, 'e2e')],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};