import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['lib/version.js', '**/node_modules', '**/scripts']),
  {
    // extends: compat.extends('@react-native'),

    extends: compat.extends(
        "plugin:react/recommended",
        // "plugin:@typescript-eslint/strict-type-checked",
        "prettier",
        "plugin:prettier/recommended",
    ),

    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.shelljs,
        ...globals.jest,
        __DEV__: true,
        window: true,
      },
    },

    settings: { react: { version: '19.2.0' } },

    rules: {
      'jest/no-identical-title': 0,
      'eslint-comments/no-unlimited-disable': 0,
      'no-new': 0,
      'no-continue': 0,
      'no-extend-native': 0,
      'import/no-dynamic-require': 0,
      'global-require': 'off',
      'class-methods-use-this': 0,
      'no-console': 1,
      'no-plusplus': 0,
      'no-undef': 0,
      'no-catch-shadow': 0,
      'no-underscore-dangle': 'off',
      'no-use-before-define': 0,
      'react/forbid-prop-types': 'warn',
      'react/prop-types': 0,

      'react/jsx-filename-extension': ['off', { extensions: ['.js', '.jsx'] }],

      'import/no-unresolved': 0,
    },
  },
]);
