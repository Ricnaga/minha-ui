import type { HTMLAttributes } from 'svelte/elements';

import { emptyState } from '@/theme';

import type { UseEmptyStateProps } from './empty-state.types';

export const DEFAULT_EMPTY_MESSAGE = 'Nenhum resultado encontrado';

export function useEmptyState(getProps: () => UseEmptyStateProps) {
  const slots = emptyState();

  const rootProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      return slots.root({ class: getProps().class });
    },
  };

  const imageProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      return slots.image();
    },
  };

  const titleProps: HTMLAttributes<HTMLParagraphElement> = {
    get class() {
      return slots.title();
    },
  };

  const messageProps: HTMLAttributes<HTMLParagraphElement> = {
    get class() {
      return slots.message();
    },
  };

  const actionProps: HTMLAttributes<HTMLDivElement> = {
    get class() {
      return slots.action();
    },
  };

  return {
    rootProps,
    imageProps,
    titleProps,
    messageProps,
    actionProps,
    get message() {
      return getProps().message === undefined
        ? DEFAULT_EMPTY_MESSAGE
        : getProps().message;
    },
  };
}
