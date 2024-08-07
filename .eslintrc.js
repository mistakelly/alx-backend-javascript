module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended'
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: [
      'react',
      '@typescript-eslint'
    ],
    rules: {
      // Your custom rules
    }
  };
  