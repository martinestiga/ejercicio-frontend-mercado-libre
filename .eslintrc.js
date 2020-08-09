module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'object-curly-newline': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'max-len': ['warn', 140, {
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreComments: true,
    }],
    'react/jsx-props-no-spreading': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['setupTests.js', '**/*.test.ts', '**/*.test.tsx'] }],
    'react/no-danger': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  ignorePatterns: ['dist'],
};
