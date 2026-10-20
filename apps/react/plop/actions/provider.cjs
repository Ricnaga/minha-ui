// plop-actions/provider.js
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
    path: process.cwd().concat("/src/components/{{pascalCase name}}/index.ts"),
    templateFile: "templates/provider/index.ts.hbs",
  },
  {
    type: "add",
    path: process.cwd().concat("/src/components/{{pascalCase name}}/{{kebabCase name}}.types.ts"),
    templateFile: "templates/provider/provider.types.ts.hbs",
  },
  {
    type: "add",
    path: process.cwd().concat("/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx"),
    templateFile: "templates/provider/provider.tsx.hbs",
  },
  {
    type: "add",
    path: process.cwd().concat("/src/components/{{pascalCase name}}/use{{pascalCase name}}.ts"),
    templateFile: "templates/provider/useHook.ts.hbs",
  },

  /**
   * =========================
   * COMPONENT INDEX EXPORT
   * =========================
   */
  {
    type: "modify",
    path: process.cwd().concat("/src/components/index.ts"),
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
