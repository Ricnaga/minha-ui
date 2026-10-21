const componentActions = require("./actions/component.cjs");
const providerActions = require("./actions/provider.cjs");
const hookActions = require("./actions/hook.cjs");

module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "O que deseja criar?",
    prompts: [
      {
        type: "list",
        name: "kind",
        message: "O que você quer criar?",
        choices: [
          { name: "Component", value: "component" },
          { name: "Provider", value: "provider" },
          { name: "Hook", value: "hook" },
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
            case "hook":
              return "Nome do hook (ex: entrada user-form, o hook criado: useUserForm)?";
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

        case "hook":
          return hookActions(plop);

        default:
          return [];
      }
    },
  });
};
