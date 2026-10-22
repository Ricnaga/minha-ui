import { onMount } from 'svelte';
import type { HTMLAttributes, SVGAttributes } from 'svelte/elements';

import { spinner, spinnerSheet } from '@/theme';

import type { UseSpinnerProps } from './spinner.types';

export function useSpinner(getProps: () => UseSpinnerProps) {
  const { container, wrapper, icon } = spinner();

  onMount(() => {
    if (!spinnerSheet) return;

    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      spinnerSheet,
    ];
  });

  const containerProps: HTMLAttributes<HTMLDivElement> = {
    class: container(),
    role: 'status',
    'aria-busy': 'true',
  };

  const wrapperProps: HTMLAttributes<HTMLDivElement> = {
    class: wrapper(),
  };

  const svgProps: SVGAttributes<SVGSVGElement> = {
    viewBox: '25 25 50 50',
    get class() {
      return icon({
        color: getProps().color,
        thickness: getProps().thickness,
        class: getProps().class,
      });
    },
  };

  return { containerProps, wrapperProps, svgProps };
}
