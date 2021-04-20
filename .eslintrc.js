module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  plugins: ['eslint-plugin-prettier', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'no-console': 'off',
    'no-debugger': 'error',
    'react/forbid-prop-types': 'warn',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'warn',
    'linebreak-style': 0,
    'no-use-before-define': 'off',
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'react/require-default-props': 'off',
    'react/jsx-curly-newline': 'off',
    'function-paren-newline': 'off',
    'react/jsx-indent': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    indent: 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
