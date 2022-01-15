const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^recoil/(.*)$': '<rootDir>/src/recoil/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.ts*'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
  coverageThreshold: {
    global: {
      lines: 30,
      statements: 30,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
