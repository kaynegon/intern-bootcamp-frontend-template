import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tslibPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'], // Inclui arquivos React (.jsx, .tsx)
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/node-printer/**',
      'package-lock.json',
    ],
    languageOptions: {
      globals: {
        ...globals.browser, // Variáveis globais para navegadores
        ...globals.node,
        ...globals.jest,
      },
      parser: tsParser, // Usa o parser do TypeScript
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Habilita o suporte ao JSX
        },
        ecmaVersion: 'latest', // Define a versão mais recente do ECMAScript
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tslibPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin, // Adiciona o plugin do Prettier
    },
    settings: {
      react: {
        version: 'detect', // Detecta automaticamente a versão do React
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...tslibPlugin.configs.recommended.rules,
      'prettier/prettier': 'error', // Exibe erros de Prettier como erros de lint
      'react/react-in-jsx-scope': 'off', // Desnecessário desde o React 17+
      'react/prop-types': 'off', // Desativa validação de PropTypes (usamos TypeScript)
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-duplicate-imports': 'error',
      'no-nested-ternary': 'error',
    },
  },
];
