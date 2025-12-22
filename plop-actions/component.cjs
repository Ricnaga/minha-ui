// plop-actions/component.js
module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => [
  /**
   * =========================
   * COMPONENT
   * =========================
   */
  {
    type: "add",
    path: "src/components/{{pascalCase name}}/index.ts",
    templateFile: "plop-templates/component/index.ts.hbs",
  },
  {
    type: "add",
    path: "src/components/{{pascalCase name}}/{{kebabCase name}}.types.ts",
    templateFile: "plop-templates/component/types.ts.hbs",
  },
  {
    type: "add",
    path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
    templateFile: "plop-templates/component/component.tsx.hbs",
  },
  {
    type: "add",
    path: "src/components/{{pascalCase name}}/use{{pascalCase name}}.ts",
    templateFile: "plop-templates/component/useHook.ts.hbs",
  },

  /**
   * =========================
   * THEME (somente component)
   * =========================
   */
  {
    type: "add",
    path: "src/theme/{{kebabCase name}}.tv.ts",
    templateFile: "plop-templates/theme/theme.tv.ts.hbs",
  },
  {
    type: "modify",
    path: "src/theme/index.ts",
    transform: (content, data) => {
      const themeName = plop.getHelper("kebabCase")(data.name);
      const newExport = `export * from "./${themeName}.tv";`;

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

  /**
   * =========================
   * COMPONENT INDEX EXPORT
   * =========================
   */
  {
    type: "modify",
    path: "src/components/index.ts",
    transform: (content, data) => {
      const componentName = plop.getHelper("pascalCase")(data.name);
      const newExport = `export * from "./${componentName}";`;

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
