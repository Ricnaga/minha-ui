export default {
  '*.{ts,tsx}': [
    () => 'pnpm --filter @minha-ui/react exec eslint . --fix',
    () => 'pnpm typecheck',
    () => 'pnpm test:unit --bail=1 --passWithNoTests',
  ],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
};
