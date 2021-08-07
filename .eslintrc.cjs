module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': 'warn',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-commented-out-tests': 'off',
      },
    },
  ],
};
