module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'jest', 'import', 'node', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-return-await': 'error',
    'prefer-arrow-callback': 'error',
    'import/no-anonymous-default-export': 'error',
    'node/no-deprecated-api': 'error',
  },
};
