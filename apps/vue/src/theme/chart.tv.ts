import { tv } from 'tailwind-variants';

export const chart = tv({
  slots: {
    root: 'w-full',
    svg: 'block h-auto w-full',
    grid: 'stroke-neutral-200 stroke-1',
    axisLine: 'stroke-neutral-300 stroke-1',
    axisLabel: 'fill-neutral-500 text-xs',
    valueLabel: 'fill-neutral-600 text-xs',
    bar: 'chart-bar-enter',
    line: 'fill-none stroke-2 chart-line-draw',
    point: 'chart-point-enter',
  },

  variants: {
    color: {
      sky: {
        bar: 'fill-sky-500',
        line: 'stroke-sky-500',
        point: 'fill-sky-500',
      },
      emerald: {
        bar: 'fill-emerald-500',
        line: 'stroke-emerald-500',
        point: 'fill-emerald-500',
      },
      amber: {
        bar: 'fill-amber-500',
        line: 'stroke-amber-500',
        point: 'fill-amber-500',
      },
      violet: {
        bar: 'fill-violet-500',
        line: 'stroke-violet-500',
        point: 'fill-violet-500',
      },
      red: {
        bar: 'fill-red-500',
        line: 'stroke-red-500',
        point: 'fill-red-500',
      },
    },
  },

  defaultVariants: {
    color: 'sky',
  },
});

export type ChartColor = keyof typeof chart.variants.color;

export type ChartVariants = {
  color?: ChartColor;
};

const chartSheet =
  typeof CSSStyleSheet !== 'undefined' ? new CSSStyleSheet() : null;

if (chartSheet) {
  chartSheet.replaceSync(`
    @keyframes chart-bar-grow {
      from { transform: scaleY(0); }
    }
    @keyframes chart-line-draw {
      from { stroke-dashoffset: 1; }
    }
    @keyframes chart-point-enter {
      from { opacity: 0; transform: scale(0.5); }
    }

    .chart-bar-enter {
      transform-box: fill-box;
      transform-origin: bottom;
      animation: chart-bar-grow 400ms cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .chart-line-draw {
      stroke-dasharray: 1;
      stroke-dashoffset: 0;
      animation: chart-line-draw 900ms ease-out both;
    }
    .chart-point-enter {
      transform-box: fill-box;
      transform-origin: center;
      animation: chart-point-enter 150ms ease-out both;
    }

    @media (prefers-reduced-motion: reduce) {
      .chart-bar-enter,
      .chart-line-draw,
      .chart-point-enter {
        animation: none !important;
      }
    }
  `);
}

// Adoção no escopo do módulo (guardada para SSR/jsdom) para que os keyframes
// existam antes do primeiro paint — evita o flash do estado final no mount.
if (
  chartSheet &&
  typeof document !== 'undefined' &&
  'adoptedStyleSheets' in document
) {
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, chartSheet];
}

export { chartSheet };
