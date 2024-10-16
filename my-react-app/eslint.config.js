import {Linter} from 'eslint';
import react from '@eslint-plugin-react';
import ts from '@typescript-eslint/eslint-plugin';
import prettier, { languages } from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.ts','**/*.tsx'],
    plugins:{
      react,
      '@typescript-eslint': ts,
      prettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      }
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ]
  },
  prettierConfig,
];