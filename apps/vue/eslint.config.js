// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores(['dist', 'storybook-static']),
  {
    files: ['**/*.{ts,tsx,vue}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...vue.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
    rules: {
      // Evita complexidade cognitiva: prefira early return ou variáveis nomeadas.
      'no-nested-ternary': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      // O vue/recommended exige multi-word component names; o projeto usa
      // nomes de domínio (Button, ModalHeader) e não separa por diretório.
      'vue/multi-word-component-names': 'off',
      // Conflita com o Prettier: o Prettier colapsa os atributos de um
      // elemento em uma única linha e esta regra exige um atributo por linha.
      'vue/max-attributes-per-line': 'off',
    },
  },
  {
    files: ['**/__tests__/**/*.ts'],
    rules: {
      // Testes montam provider e consumidor no mesmo arquivo.
      'vue/one-component-per-file': 'off',
    },
  },
]);
