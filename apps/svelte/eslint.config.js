// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'storybook-static']),
  {
    files: ['**/*.{ts,svelte}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...svelte.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        // O svelte-eslint-parser usa esse parser para o bloco <script> e
        // para os módulos .svelte.ts.
        parser: tseslint.parser,
      },
    },
    rules: {
      // Evita complexidade cognitiva: prefira early return ou variáveis nomeadas.
      'no-nested-ternary': 'error',
    },
  },
]);
