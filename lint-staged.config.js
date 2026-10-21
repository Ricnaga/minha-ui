export default {
  '*.{ts,tsx}': [
    () => 'pnpm --filter @minha-ui/react exec eslint . --fix',
    () => 'pnpm --filter @minha-ui/e2e exec eslint . --fix',
    () => 'pnpm typecheck',
    () => 'pnpm test:unit',
  ],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
};
