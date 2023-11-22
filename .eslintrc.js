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

  extends: ['eslint-config-egg', 'prettier', 'plugin:prettier/recommended'],

  rules: {
    'prettier/prettier': 'warn',
  },
};
