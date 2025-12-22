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
    path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
    templateFile: "plop-templates/provider/provider.tsx.hbs",
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

      const lines = content.split("\n").filter(Boolean);
      lines.push(newExport);
      lines.sort((a, b) => a.localeCompare(b));

      return lines.join("\n") + "\n";
    },
  },
];
