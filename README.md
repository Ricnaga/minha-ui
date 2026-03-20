# Minha UI

🚧 **Projeto criado para estudo** 🚧  
Este repositório contém um projeto de interface (UI) criado unicamente para fins de aprendizado e prática de desenvolvimento com React, TypeScript e Vite. Não se trata de um projeto de produção nem de um produto final.

---

## 🧠 Sobre o projeto

**Minha UI** é uma base de UI criada exclusivamente para fins educacionais, servindo como um ambiente de estudo e experimentação de conceitos de frontend.

O objetivo principal do projeto é praticar:

- Criação de componentes reutilizáveis
- Organização de uma base de UI
- Uso de ferramentas modernas do ecossistema React

---

## 📦 Tecnologias

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React 19** - Biblioteca principal para construção de interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS v4** - Framework de estilização
- **Storybook** - Documentação e desenvolvimento de componentes
- **Vitest** - Testes unitários
- **Playwright** - Testes end-to-end
- **ESLint** + **Prettier** - Linting e formatação de código
- **Husky** + **Commitlint** - Git hooks e conventional commits
- **Phosphor Icons** - Biblioteca de ícones
- **React Error Boundary** - Tratamento de erros
- **Changesets** - Versionamento e changelog

---

## 🚀 Começando

### 1. Clone o repositório

```bash
git clone https://github.com/Ricnaga/minha-ui.git
```

### 2. Instale as dependências

Após clonar o repositório, entre na pasta do projeto e instale as dependências necessárias:

```bash
cd minha-ui
pnpm install
```

Este projeto utiliza **pnpm** como gerenciador de pacotes.  
Caso você ainda não tenha o pnpm instalado, instale-o com:

```bash
npm install -g pnpm
```

### 3. Rode o ambiente de desenvolvimento

```bash
pnpm dev
```

### 4. Abra o Storybook (se estiver configurado)

```bash
pnpm storybook
```

pasta `src/` está organizada da seguinte forma:

```
├── components/       # Componentes reutilizáveis da UI
├── hooks/            # Hooks de uso mais comum
├── theme/            # Estilos dos componentes
├── types/            # Tipos TypeScript mais utilizados
└── utils/            # Funções utilitárias (ex.: manipulação de strings, porcentagens, valores monetários)
```

> Cada pasta contém arquivos específicos do seu propósito:
>
> - `components/` → Botões, inputs, cards, etc.
> - `hooks/` → Hooks customizados que podem ser usados em vários lugares da aplicação.
> - `theme/` → Variáveis, temas e estilos globais dos componentes.
> - `types/` → Definições de tipos compartilhadas por toda a aplicação.
> - `utils/` → Funções utilitárias de uso diário, como formatação de valores ou manipulação de dados.

---

## 📌 Importante

Este projeto foi criado **somente para estudos e prática**, com foco em experimentar ferramentas, padrões e workflows de frontend modernos.  
Ele **não tem garantia de estabilidade** e pode não estar pronto para uso em produção.

---

## 📄 Licença

Este repositório está sob a licença **MIT** — veja o arquivo [LICENSE](https://github.com/Ricnaga/minha-ui/blob/main/LICENSE) para mais detalhes.

---

## 💬 Contribuições

Por ser um projeto de estudo pessoal, não estou aceitando contribuições externas no momento — mas fique à vontade para ver o código e aprender com ele! 😊
