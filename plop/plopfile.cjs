// Dispatcher do Plop do monorepo.
//
// Cada app tem o seu próprio plopfile, com os templates do seu framework. Aqui
// a gente apenas carrega todos eles via `plop.load`, que é a API oficial do
// plop para compor plopfiles.
//
// O `destBasePath` de cada app garante que os arquivos sejam gerados dentro do
// app escolhido, e o proxy interno do plop resolve os templates a partir do
// plopfile de origem.
const path = require('node:path');

const APPS = ['react', 'vue', 'svelte'];

module.exports = async function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  for (const app of APPS) {
    const appDir = path.join(__dirname, '..', 'apps', app);

    await plop.load(path.join(appDir, 'plop', 'plopfile.cjs'), {
      destBasePath: appDir,
    });
  }
};
