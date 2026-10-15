import type { HTMLAttributes } from 'react';
import { transitionContainer, transitionEffects } from '@/theme';
import type { UseTransitionContainerProps } from './transition-container.types';

export function useTransitionContainer(props: UseTransitionContainerProps) {
  const {
    isOpen,
    animation = ['fade'],
    className,
    'aria-hidden': ariaHidden,
    inert,
    ...rest
  } = props;

  const effects = Array.isArray(animation) ? animation : [animation];
  const phase = isOpen ? 'enter' : 'exit';
  const effectClasses = effects.map(
    (effect) => transitionEffects[effect][phase],
  );

  // Quando fechado, o conteúdo fica invisível mas segue montado: precisamos
  // removê-lo da árvore de acessibilidade e do fluxo de foco do teclado.
  const hidden = isOpen ? undefined : true;

  const transitionContainerProps: HTMLAttributes<HTMLDivElement> = {
    ...rest,
    'aria-hidden': ariaHidden ?? hidden,
    inert: inert ?? hidden,
    className: transitionContainer({
      isOpen,
      className: [effectClasses, className],
    }),
  };

  return { transitionContainerProps };
}
