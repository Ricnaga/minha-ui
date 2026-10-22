import {
  computed,
  onMounted,
  type HTMLAttributes,
  type SVGAttributes,
} from 'vue';

import { spinner, spinnerSheet } from '@/theme';

import type { UseSpinnerProps } from './spinner.types';

export function useSpinner(props: UseSpinnerProps) {
  const { container, wrapper, icon } = spinner();

  onMounted(() => {
    if (!spinnerSheet) return;

    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      spinnerSheet,
    ];
  });

  const containerProps: HTMLAttributes = {
    class: container(),
    role: 'status',
    'aria-busy': 'true',
  };

  const wrapperProps: HTMLAttributes = {
    class: wrapper(),
  };

  const svgProps = computed<SVGAttributes>(() => ({
    viewBox: '25 25 50 50',
    class: icon({
      color: props.color,
      thickness: props.thickness,
      class: props.class,
    }),
  }));

  return { containerProps, wrapperProps, svgProps };
}
