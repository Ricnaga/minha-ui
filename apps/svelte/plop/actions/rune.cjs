// plop-actions/rune.js
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
      "runes",
      "use{{pascalCase name}}",
      "index.ts"
    ),
    templateFile: "templates/rune/index.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "runes",
      "use{{pascalCase name}}",
      "use{{pascalCase name}}.svelte.ts"
    ),
    templateFile: "templates/rune/useHook.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "runes",
      "use{{pascalCase name}}",
      "stories",
      "use{{pascalCase name}}.stories.svelte"
    ),
    templateFile: "templates/rune/stories.svelte.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "runes",
      "use{{pascalCase name}}",
      "stories",
      "use{{pascalCase name}}.stories.ts"
    ),
    templateFile: "templates/rune/stories.ts.hbs",
  },
  {
    type: "add",
    path: path.join(
      APP_DIR,
      "src",
      "runes",
      "use{{pascalCase name}}",
      "stories",
      "use{{pascalCase name}}.play.ts"
    ),
    templateFile: "templates/testing/playTest.ts.hbs",
  },
  {
    type: "modify",
    path: path.join(APP_DIR, "src", "runes", "index.ts"),
    transform: (content, data) => {
      const runeName = plop.getHelper("pascalCase")(data.name);
      const newExport = `export * from "./use${runeName}";`;

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
