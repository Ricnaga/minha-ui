const componentActions = require("./actions/component.cjs");
const providerActions = require("./actions/provider.cjs");

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
        ],
      },
      {
        type: "input",
        name: "name",
        message: "Nome do componente (ex: modal-header)?",
      },
    ],
    actions: (data) => {
      switch (data.kind) {
        case "component":
          return componentActions(plop);

        case "provider":
          return providerActions(plop);

        default:
          return [];
      }
    },
  });
};
