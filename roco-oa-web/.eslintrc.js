module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-essential',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true, ignoreUrls: true }],
    'no-plusplus': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
  },
};
