// plop-actions/provider.js
const path = require("node:path");

const APP_DIR = path.resolve(__dirname, "..", "..");

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => [
  /**
   * =========================
   * COMPONENT PROVIDER
   * =========================
   */
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "components",
      "{{pascalCase name}}",
      "index.ts"
    ),
    templateFile: "templates/provider/index.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "components",
      "{{pascalCase name}}",
      "{{kebabCase name}}.types.ts"
    ),
    templateFile: "templates/provider/provider.types.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "components",
      "{{pascalCase name}}",
      "{{pascalCase name}}.svelte"
    ),
    templateFile: "templates/provider/provider.svelte.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "components",
      "{{pascalCase name}}",
      "use{{pascalCase name}}.svelte.ts"
    ),
    templateFile: "templates/provider/useHook.ts.hbs",
  },

  /**
   * =========================
   * COMPONENT INDEX EXPORT
   * =========================
   */
  {
    type: "modify",
    path: path.join(APP_DIR, "src", "components", "index.ts"),
    transform: (content, data) => {
      const componentName = plop.getHelper("pascalCase")(data.name);
      const newExport = `export * from "./${componentName}";`;

      if (content.includes(newExport)) return content;

      const lines = content.split("\n").filter(Boolean);
      lines.push(newExport);
      lines.sort((a, b) => a.localeCompare(b));

      return lines.join("\n") + "\n";
    },
  },
];
