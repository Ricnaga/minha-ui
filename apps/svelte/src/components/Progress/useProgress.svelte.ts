import { onMount } from 'svelte';

import { progress, progressSheet } from '@/theme';

import type { UseProgressProps } from './progress.types';

const { core, wrapper } = progress();

export function useProgress(getProps: () => UseProgressProps) {
  onMount(() => {
    if (!progressSheet) return;
    if ('adoptedStyleSheets' in document) {
      if (!document.adoptedStyleSheets.includes(progressSheet)) {
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, progressSheet];
      }
    }
  });

  return {
    get coreProps() {
      const props = getProps() as Record<string, unknown>;
      const size = (props.size as 'sm' | 'md' | 'lg') ?? 'md';
      const color = (props.color as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error') ?? 'primary';
      const animated = props.animated ?? true;
      const value = (props.value as number) ?? 25;
      const v = value / 100;
      const valuePercentage = new Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(v);
      return {
        'data-testid': 'progress-core',
        style: `width: ${valuePercentage};`,
        class: core({ animated, color, size, class: props.class } as Parameters<typeof core>[0]),
      };
    },
    get wrapperProps() {
      const props = getProps() as Record<string, unknown>;
      const size = (props.size as 'sm' | 'md' | 'lg') ?? 'md';
      const color = (props.color as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error') ?? 'primary';
      const animated = props.animated ?? true;
      return {
        'data-testid': 'progress-wrapper',
        class: wrapper({ animated, color, size } as Parameters<typeof wrapper>[0]),
      };
    },
  };
}
