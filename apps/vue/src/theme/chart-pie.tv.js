import { tv } from 'tailwind-variants';
export const chartPie = tv({
    slots: {
        root: 'flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center',
        svg: 'block h-auto w-full max-w-48',
        slice: 'fill-none chart-pie-slice',
        legend: 'flex flex-col gap-3',
        legendItem: 'flex items-center gap-2 text-sm',
        swatch: 'size-3 shrink-0 rounded-full',
        legendLabel: 'text-neutral-700',
        legendValue: 'ml-auto text-neutral-500',
    },
    variants: {
        color: {
            sky: {
                slice: 'stroke-sky-500',
                swatch: 'bg-sky-500',
            },
            emerald: {
                slice: 'stroke-emerald-500',
                swatch: 'bg-emerald-500',
            },
            amber: {
                slice: 'stroke-amber-500',
                swatch: 'bg-amber-500',
            },
            violet: {
                slice: 'stroke-violet-500',
                swatch: 'bg-violet-500',
            },
            red: {
                slice: 'stroke-red-500',
                swatch: 'bg-red-500',
            },
        },
    },
    defaultVariants: {
        color: 'sky',
    },
});
const chartPieSheet = typeof CSSStyleSheet !== 'undefined' ? new CSSStyleSheet() : null;
if (chartPieSheet) {
    chartPieSheet.replaceSync(`
    @keyframes chart-pie-fill {
      from { stroke-dasharray: 0 100; }
    }

    .chart-pie-slice {
      animation: chart-pie-fill 500ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }

    @media (prefers-reduced-motion: reduce) {
      .chart-pie-slice {
        animation: none !important;
      }
    }
  `);
}
// Adoção no escopo do módulo (guardada para SSR/jsdom) para que os keyframes
// existam antes do primeiro paint — evita o flash do estado final no mount.
if (chartPieSheet &&
    typeof document !== 'undefined' &&
    'adoptedStyleSheets' in document) {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, chartPieSheet];
}
export { chartPieSheet };
