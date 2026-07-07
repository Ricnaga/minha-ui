---
name: minha-ui-rules
description: >
  Use sempre. Princípios de engenharia de software aplicados a todo código
  gerado: SOC, DRY, KISS, YAGNI, Clean Code e design patterns do projeto.
  Ignorar estas regras resulta em código rejeitado.
---

# Regras de engenharia

Estes princípios se aplicam **a todo código gerado ou modificado** no projeto.
Nenhuma exceção sem justificativa explícita.

## SOC — Separation of Concerns

Cada módulo tem **uma única responsabilidade** e não ultrapassa 200 linhas.

```tsx
// ❌ ERRADO: Button.tsx mistura JSX, lógica, estilo e testes
function Button(props) {
  // 30 linhas de variantes inline
  // 20 linhas de lógica de clique + ripple
  // 10 linhas de JSX
}

// ✅ CERTO: separado em 3 arquivos
// Button.tsx          → JSX puro (5-10 linhas)
// useButton.ts        → lógica (estado, eventos, variantes)
// button.types.ts     → tipos (UseButtonProps + ButtonProps)
```

Regras práticas:
- **Componente** → só monta o JSX chamando o hook
- **Hook `useComponent`** → só lógica, nunca JSX
- **Types** → só interfaces e tipos, nunca runtime
- **Theme `*.tv.ts`** → só definição de variantes, nunca lógica
- **Teste** → só asserções, nunca lógica de produção
- Se um arquivo ultrapassa 200 linhas, extraia em módulos menores

## DRY — Don't Repeat Yourself

Toda repetição de lógica é candidata a extração. Três ocorrências = refatoração
obrigatória.

```tsx
// ❌ ERRADO: mesma lógica de formatação copiada em 3 lugares
const formatado1 = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const formatado2 = outro.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

// ✅ CERTO: função utilitária
// src/utils/number/index.ts
export function formatToMonetary(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
```

O que extrair:
- Utilitários de formatação → `src/utils/`
- Lógica de componentes → hooks customizados (`useComponent`)
- Configuração de variantes → `src/theme/*.tv.ts`
- Constantes de teste → `playwright/support/story-constants.ts`
- Tipos compartilhados → `src/types/`

O que **não** extrair:
- Duas linhas similares mas com semântica diferente (violaria KISS)
- Expressões que ficam menos legíveis isoladas

## KISS — Keep It Simple, Stupid

A solução mais simples que funciona é sempre a melhor.

```tsx
// ❌ ERRADO: abstraction over engineering
const variants = ["primary", "secondary", "error"] as const;
type Variant = (typeof variants)[number];
const variantStyles: Record<Variant, string> = {
  primary: "bg-blue-500",
  secondary: "bg-gray-500",
  error: "bg-red-500",
};
// tudo isso para no fim fazer: className={variantStyles[variant]}

// ✅ CERTO: cada variante tem seu bloco no tv() e pronto
// (em theme/button.tv.ts)
```

Regras práticas:
- Prefira `if`/`else` simples a padrões de design desnecessários
- Prefira arrays/maps literais a sistemas genéricos de configuração
- Se você precisa de um diagrama para explicar o código, ele é complexo demais
- Evite herança, prefira composição
- Não crie abstrações para "casos futuros" (viola YAGNI)
- React Context é para estado compartilhado entre vários níveis, não para
  evitar prop drilling de 1 nível

## YAGNI — You Ain't Gonna Need It

Nunca adicione código, hook, prop, variante ou configuração para um caso de
uso que não existe hoje.

```tsx
// ❌ ERRADO: "vai que um dia precisamos de tooltip em mobile"
<Button
  tooltipPosition="top"
  tooltipAnimation="fade"
  tooltipDelay={300}
  ...
>

// ✅ CERTO: só o que o componente precisa agora
<Button variant="contained" color="primary" onClick={handleClick}>
  Salvar
</Button>
```

O que não adicionar:
- Props sem uso (remova se não for usada em nenhuma story ou teste)
- Variantes sem story correspondente
- Hooks sem pelo menos um consumidor real
- Métodos em APIs públicas sem chamada no código
- Configuração de animação/timing sem requisito definido
- Tratamento de edge case que você não consegue reproduzir

Aceitável adicionar:
- Props com `default` que mantêm compatibilidade (ex: `size = "medium"`)
- Testes para o comportamento atual (não para o futuro)
- Comentários `// TODO` com ticket associado

## Clean Code — Código legível e consistente

Nomeação, estrutura e formatação devem comunicar intenção, não implementação.

### Nomes

```tsx
// ❌ ERRADO: nomes vagos
const data = fetchThings();
const fn = () => {};
const arr = items.map((x) => x.name);

// ✅ CERTO: nomes que comunicam intenção
const { products, isLoading } = useFetch<Product[]>("/api/products");
const handleSubmit = (event: FormEvent) => { event.preventDefault(); ... };
const productNames = products.map((product) => product.name);
```

Regras:
- **Booleanos**: prefixo `is`/`has`/`should`/`show` (`isLoading`, `hasError`)
- **Eventos**: prefixo `on` (`onClick`, `onClose`, `onSearchChange`)
- **Handlers**: prefixo `handle` (`handleClick`, `handleSubmit`)
- **Props de componente**: PascalCase para componentes, camelCase para tudo mais
- Abreviações só quando universalmente conhecidas (`ref`, `id`, `html`, `api`)

### Funções

- Máximo 20 linhas (violação = extraia)
- Um nível de indentação por função (use early return)
- Efeitos colaterais devem ser explícitos no nome (`saveToLocalStorage` não `process`)

### Imports

```tsx
// Ordem: React → libs → @/ aliases → relativos → tipos
import { useState } from "react";
import { tv } from "tailwind-variants";
import { Button } from "@/components";
import { useRipple } from "@/hooks";
import { useButton } from "./useButton";
import type { ButtonProps } from "./button.types";
```

## Design Patterns do projeto

### Compound Components

Componentes que compartilham estado via Context, sem prop drilling:

```tsx
// Provider (ex: ModalProvider) cria o contexto e expõe valores
// Componentes filhos (ModalHeader, ModalContent, ModalActions) consomem

<Modal>
  <ModalHeader>Título</ModalHeader>
  <ModalContent>Conteúdo</ModalContent>
  <ModalActions>Footer</ModalActions>
</Modal>
```

Regras:
- O provider sempre usa `createContext` + hook `useSafeContext` que valida
  se o provider existe (lança erro se usado fora)
- Componentes filhos renderizam `null` se estiverem fora do provider
- Props do provider vão no componente pai; filhos só recebem props de
  apresentação (className, children)

### Hook-Component Split

TODO componente tem um hook correspondente que isola a lógica:

```
useComponent(props) → { componentProps, children, ... }
Component(props)    → render(<element {...componentProps}>{children}</element>)
```

Isso permite:
- Testar lógica sem renderizar DOM
- Reaproveitar lógica em variações do componente
- Manter o JSX legível em uma única olhada

### State patterns

| Padrão | Quando usar | Exemplo |
|---|---|---|
| `useState` | Estado local simples | `isOpen`, `value` |
| `useReducer` | Estado com múltiplos campos ou transições | Formulário multi-etapa |
| `useSyncExternalStore` | Estado global fora da árvore React | `createStore` do projeto |
| `createObserverStore` | Estado observável pub/sub | Notificações, eventos globais |
| React Context | Estado compartilhado em subárvore | Compound components |

### Error handling

- Use `react-error-boundary` para boundaries de erro
- Componentes com data-fetching expõem `hasError`/`error` via hook
- Use discriminated unions para estados assíncronos:
  ```ts
  type AsyncState<T> =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: T }
    | { status: "error"; error: Error };
  ```
