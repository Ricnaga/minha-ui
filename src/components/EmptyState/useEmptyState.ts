import type { HTMLAttributes } from 'react';
import { emptyState } from '@/theme';
import type { UseEmptyStateProps } from './empty-state.types';

export const DEFAULT_EMPTY_MESSAGE = 'Nenhum resultado encontrado';

export function useEmptyState(props: UseEmptyStateProps) {
  const { image, title, message, action, className, ...rest } = props;

  const {
    root,
    image: imageSlot,
    title: titleSlot,
    message: messageSlot,
    action: actionSlot,
  } = emptyState();

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
    message: message === undefined ? DEFAULT_EMPTY_MESSAGE : message,
    action,
  };
}
