const componentActions = require("./actions/component.cjs");
const providerActions = require("./actions/provider.cjs");
const composableActions = require("./actions/composable.cjs");

module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // O nome do generator é o do app: o dispatcher da raiz carrega os plopfiles
  // de todos os apps com `plop.load`, e generators com o mesmo nome colidiriam.
  plop.setGenerator("vue", {
    description: "Criar componente, provider ou composable no app Vue",
    prompts: [
      {
        type: "list",
        name: "kind",
        message: "O que você quer criar?",
        choices: [
          { name: "Component", value: "component" },
          { name: "Provider", value: "provider" },
          { name: "Composable", value: "composable" },
        ],
      },
      {
        type: "input",
        name: "name",
        message: (answers) => {
          switch (answers.kind) {
            case "component":
              return "Nome do componente (ex: modal-header)?";
            case "provider":
              return "Nome do componente provider (ex: modal-header)?";
            case "composable":
              return "Nome da composable (ex: entrada user-form, a composable criada: useUserForm)?";
            default:
              return "Inválido";
          }
        },
      },
    ],
    actions: (data) => {
      switch (data.kind) {
        case "component":
          return componentActions(plop);

        case "provider":
          return providerActions(plop);

        case "composable":
          return composableActions(plop);

        default:
          return [];
      }
    },
  });
};
