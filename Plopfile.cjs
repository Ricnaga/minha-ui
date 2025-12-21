module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Criar um componente React com hook e types",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome do componente (ex: modal-header)?",
      },
    ],
    actions: [
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
      {
        type: "add",
        path: "src/theme/{{kebabCase name}}.tv.ts",
        templateFile: "plop-templates/theme/theme.tv.ts.hbs",
      },
      {
        type: "modify",
        path: "src/components/index.ts",
        transform: (content, data) => {
          const componentName = plop.getHelper("pascalCase")(data.name);
          const newExport = `export * from "./${componentName}";`;

          // evita duplicar
          if (content.includes(newExport)) {
            return content;
          }

          const lines = content
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

          lines.push(newExport);

          lines.sort((a, b) => a.localeCompare(b));

          return lines.join("\n") + "\n";
        },
      },
      {
        type: "modify",
        path: "src/theme/index.ts",
        transform: (content, data) => {
          const themeName = plop.getHelper("kebabCase")(data.name);
          const newExport = `export * from "./${themeName}.tv";`;

          // evita duplicar
          if (content.includes(newExport)) {
            return content;
          }

          const lines = content
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);

          lines.push(newExport);

          lines.sort((a, b) => a.localeCompare(b));

          return lines.join("\n") + "\n";
        },
      },
    ],
  });
};
