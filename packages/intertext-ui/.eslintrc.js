module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint'
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "quote-props": ["error", "consistent"],
    "@typescript-eslint/no-empty-interface": "off"
  },
}
