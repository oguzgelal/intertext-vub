module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint', 'jest', 'import', 'node'],
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/recommended',
    'plugin:import/typescript',
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
