// plop-actions/hooks.js
module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => [
  {
    type: "add",
    path: process
      .cwd()
      .concat("/src/hooks/use{{pascalCase name}}/index.ts"),
    templateFile: "templates/hooks/useHooks.ts.hbs",
  },
  {
    type: "add",
    path: process
      .cwd()
      .concat(
        "/src/hooks/use{{pascalCase name}}/stories/use{{pascalCase name}}.stories.tsx"
      ),
    templateFile: "templates/hooks/stories.tsx.hbs",
  },
  {
    type: "modify",
    path: process.cwd().concat("/src/hooks/index.ts"),
    transform: (content, data) => {
      const hookName = plop.getHelper("pascalCase")(data.name);
      const newExport = `export * from "./use${hookName}";`;

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
