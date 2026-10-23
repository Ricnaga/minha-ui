import type { HTMLAttributes } from 'svelte/elements';

import { errorState } from '@/theme';

import type { UseErrorStateProps } from './error-state.types';

export const DEFAULT_ERROR_MESSAGE = 'Algo deu errado';

export function useErrorState(getProps: () => UseErrorStateProps) {
  const slots = errorState();

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
        ? DEFAULT_ERROR_MESSAGE
        : getProps().message;
    },
  };
}
