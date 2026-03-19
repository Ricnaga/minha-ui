export default {
  '*.{ts,tsx}': ['eslint . --fix', 'pnpm typecheck', 'pnpm test:unit --bail=1'],
  '*.{js,jsx,ts,tsx,json,css}': ['prettier --write'],
};
