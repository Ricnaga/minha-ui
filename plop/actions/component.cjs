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
    path: process.cwd().concat("/src/components/{{pascalCase name}}/index.ts"),
    templateFile: "templates/component/index.ts.hbs",
  },
  {
    type: "add",
    path: process
      .cwd()
      .concat("/src/components/{{pascalCase name}}/{{kebabCase name}}.types.ts"),
    templateFile: "templates/component/component.types.ts.hbs",
  },
  {
    type: "add",
    path: process
      .cwd()
      .concat("/src/components/{{pascalCase name}}/{{pascalCase name}}.tsx"),
    templateFile: "templates/component/component.tsx.hbs",
  },
  {
    type: "add",
    path: process
      .cwd()
      .concat(
        "/src/components/{{pascalCase name}}/stories/{{pascalCase name}}.stories.tsx"
      ),
    templateFile: "templates/component/stories.tsx.hbs",
  },
  {
    type: "add",
    path: process
      .cwd()
      .concat(
        "/src/components/{{pascalCase name}}/stories/{{pascalCase name}}.play.ts"
      ),
    templateFile: "templates/testing/playTest.ts.hbs",
  },
  {
    type: "add",
    path: process
      .cwd()
      .concat("/src/components/{{pascalCase name}}/use{{pascalCase name}}.ts"),
    templateFile: "templates/component/useHook.ts.hbs",
  },
  

  /**
   * =========================
   * THEME (somente component)
   * =========================
   */
  {
    type: "add",
    path: process.cwd().concat("/src/theme/{{kebabCase name}}.tv.ts"),
    templateFile: "templates/theme/theme.tv.ts.hbs",
  },
  {
    type: "modify",
    path: process.cwd().concat("/src/theme/index.ts"),
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
    path: process.cwd().concat("/src/components/index.ts"),
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
