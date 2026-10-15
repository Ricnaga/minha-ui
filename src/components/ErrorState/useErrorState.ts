import type { HTMLAttributes } from 'react';
import { errorState } from '@/theme';
import type { UseErrorStateProps } from './error-state.types';

export const DEFAULT_ERROR_MESSAGE = 'Algo deu errado';

export function useErrorState(props: UseErrorStateProps) {
  const { image, title, message, action, className, ...rest } = props;

  const {
    root,
    image: imageSlot,
    title: titleSlot,
    message: messageSlot,
    action: actionSlot,
  } = errorState();

  const rootProps: HTMLAttributes<HTMLDivElement> = {
    ...rest,
    className: root({ className }),
  };
  const imageProps = { className: imageSlot() };
  const titleProps = { className: titleSlot() };
  const messageProps = { className: messageSlot() };
  const actionProps = { className: actionSlot() };

  return {
    rootProps,
    imageProps,
    titleProps,
    messageProps,
    actionProps,
    image,
    title,
    message: message === undefined ? DEFAULT_ERROR_MESSAGE : message,
    action,
  };
}
