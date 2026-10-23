import { computed } from 'vue';

import { emptyState } from '@/theme';

import type { UseEmptyStateProps } from './empty-state.types';

export const DEFAULT_EMPTY_MESSAGE = 'Nenhum resultado encontrado';

export function useEmptyState(props: UseEmptyStateProps) {
  const slots = emptyState();

  const rootProps = computed(() => ({
    class: slots.root({ class: props.class }),
  }));

  const imageProps = computed(() => ({ class: slots.image() }));
  const titleProps = computed(() => ({ class: slots.title() }));
  const messageProps = computed(() => ({ class: slots.message() }));
  const actionProps = computed(() => ({ class: slots.action() }));

  const message = computed(() =>
    props.message === undefined ? DEFAULT_EMPTY_MESSAGE : props.message,
  );

  return {
    rootProps,
    imageProps,
    titleProps,
    messageProps,
    actionProps,
    image: computed(() => props.image),
    title: computed(() => props.title),
    message,
    action: computed(() => props.action),
  };
}
