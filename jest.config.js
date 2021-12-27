module.exports = {
  setupFilesAfterEnv: ['./test-setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '.scss'],
  testMatch: ['**/__tests__/*.test.(ts|tsx)'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!variables/.*)'],
  coverageReporters: ['text'],
  collectCoverageFrom: ['src/**/*.ts*'],
  coveragePathIgnorePatterns: ['/node_modules/', '/.next/'],
  coverageThreshold: {
    global: {
      lines: 10,
      statements: 10,
    },
  },
};
