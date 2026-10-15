import type { TransitionContainerProps } from './transition-container.types';
import { useTransitionContainer } from './useTransitionContainer';

export function TransitionContainer(props: TransitionContainerProps) {
  const { transitionContainerProps } = useTransitionContainer(props);

  return <div {...transitionContainerProps} />;
}
