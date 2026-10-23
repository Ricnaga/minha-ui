import type { HTMLAttributes } from 'svelte/elements';

import { transitionContainer, transitionEffects } from '@/theme';

import type { UseTransitionContainerProps } from './transition-container.types';

export function useTransitionContainer(
  getProps: () => UseTransitionContainerProps,
) {
  const transitionContainerProps: Omit<
    HTMLAttributes<HTMLDivElement>,
    'class' | 'aria-hidden' | 'inert'
  > & {
    class: string;
    'aria-hidden': HTMLAttributes<HTMLDivElement>['aria-hidden'];
    inert: boolean | undefined;
  } = {
    get 'aria-hidden'() {
      const { isOpen, 'aria-hidden': ariaHidden } = getProps();

      // Quando fechado, o conteúdo fica invisível mas segue montado: precisamos
      // removê-lo da árvore de acessibilidade e do fluxo de foco do teclado.
      return ariaHidden ?? (isOpen ? undefined : true);
    },
    get inert() {
      const { isOpen, inert } = getProps();
      const isInert = inert ?? !isOpen;

      // `inert="false"` também desativa a interação do elemento: o atributo
      // só é renderizado quando o valor é ativo.
      return isInert ? true : undefined;
    },
    get class() {
      const { isOpen, animation, class: className } = getProps();

      let effects = animation ?? ['fade'];

      if (!Array.isArray(effects)) effects = [effects];

      const phase = isOpen ? 'enter' : 'exit';

      const effectClasses = effects.map(
        (effect) => transitionEffects[effect][phase],
      );

      return transitionContainer({
        isOpen,
        class: [effectClasses, className],
      });
    },
  };

  return { transitionContainerProps };
}
