// plop-actions/composable.js
const path = require("node:path");

const APP_DIR = path.resolve(__dirname, "..", "..");

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => [
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "composables",
      "use{{pascalCase name}}",
      "index.ts"
    ),
    templateFile: "templates/composable/useHook.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "composables",
      "use{{pascalCase name}}",
      "stories",
      "use{{pascalCase name}}.stories.ts"
    ),
    templateFile: "templates/composable/stories.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "composables",
      "use{{pascalCase name}}",
      "stories",
      "use{{pascalCase name}}.play.ts"
    ),
    templateFile: "templates/testing/playTest.ts.hbs",
  },
  {
    type: "modify",
    path: path.join(APP_DIR, "src", "composables", "index.ts"),
    transform: (content, data) => {
      const composableName = plop.getHelper("pascalCase")(data.name);
      const newExport = `export * from "./use${composableName}";`;

      if (content.includes(newExport)) return content;

      const lines = content
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

      lines.push(newExport);

      lines.sort((a, b) => a.localeCompare(b));

      return lines.join("\n") + "\n";
    },
  },
];
