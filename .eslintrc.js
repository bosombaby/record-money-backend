module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['prettier', 'plugin:prettier/recommended'],

  rules: {
    'prettier/prettier': 'warn',
    'no-restricted-globals': ['error'],
  },
};
