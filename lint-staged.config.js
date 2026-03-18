export default {
  "*.{ts,tsx}": ["eslint . --fix", "pnpm typecheck"],
  "*.{js,jsx,ts,tsx,json,css}": ["prettier --write"],
};
