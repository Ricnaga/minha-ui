export default {
  '*.{ts,tsx,vue,svelte}': [
    () => 'pnpm --filter @minha-ui/react exec eslint . --fix',
    () => 'pnpm --filter @minha-ui/vue exec eslint . --fix',
    () => 'pnpm --filter @minha-ui/svelte exec eslint . --fix',
    () => 'pnpm --filter @minha-ui/e2e exec eslint . --fix',
    () => 'pnpm typecheck',
    () => 'pnpm test:unit',
  ],
  '*.{js,jsx,ts,tsx,json,css,vue,svelte}': ['prettier --write'],
};
