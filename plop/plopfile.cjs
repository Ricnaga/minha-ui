const componentActions = require("./actions/component.cjs");
const providerActions = require("./actions/provider.cjs");
const hooksActions = require("./actions/hooks.cjs");

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
          { name: "Hook", value: "hooks" },
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
            case "hooks":
              return "Nome do hook (ex: entrada form, o hook criado: useForm)?";
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

        case "hooks":
          return hooksActions(plop);

        default:
          return [];
      }
    },
  });
};
