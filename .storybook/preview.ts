import '../src/tailwind.css';
import type { Preview } from '@storybook/react-vite';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    viewport: {
      options: {
        ...INITIAL_VIEWPORTS,
        mobile: {
          name: 'Mobile (390×844)',
          styles: { width: '390px', height: '844px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet (768×1024)',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        desktop: {
          name: 'Desktop (1280×800)',
          styles: { width: '1280px', height: '800px' },
          type: 'desktop',
        },
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  // Preserva o comportamento atual (desktop) na carga inicial; stories
  // responsivas sobrescrevem com `globals.viewport` para mobile/tablet.
  initialGlobals: {
    viewport: { value: 'desktop', isRotated: false },
  },
};

export default preview;
