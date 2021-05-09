
module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  roots: [
    '<rootDir>/src',
  ],
  testRegex: '(.*.(test|spec)).(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/lib/', '/node_modules/',],
  coveragePathIgnorePatterns: ['/src/config', '/shared/erros', '/src/entities'],
  modulePathIgnorePatterns: ["<rootDir>/src/shared/", "<rootDir>/src/entities/"],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  verbose: true,
  globals: {
    'ts-jest': {
      disableSourceMapSupport: true,
    },
  },
};
