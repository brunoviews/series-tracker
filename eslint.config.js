const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const reactNativePlugin = require('eslint-plugin-react-native');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');

module.exports = [
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'react-native': reactNativePlugin,
            'simple-import-sort': simpleImportSortPlugin,
        },
        rules: {
            // Ordenación de imports (sin líneas en blanco entre grupos)
            'simple-import-sort/imports': ['warn', { groups: [['.*']] }],
            'simple-import-sort/exports': 'warn',

            // React
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // TypeScript
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',

            // React Native
            'react-native/no-inline-styles': 'off',
            'react-native/no-color-literals': 'off',
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    {
        ignores: ['node_modules/', 'dist/', '.expo/', 'babel.config.js', 'commitlint.config.js'],
    },
];
