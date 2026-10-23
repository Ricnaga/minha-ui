import type { Meta, StoryObj } from '@storybook/svelte-vite';

import type { TransitionEffect } from '@/theme';

import { testDefaultTransitionContainer } from './TransitionContainer.play';
import TransitionContainerStory from './TransitionContainerStory.svelte';

const effects: TransitionEffect[] = [
  'fade',
  'zoom',
  'slideFromTop',
  'slideFromBottom',
  'slideFromLeft',
  'slideFromRight',
];

const meta: Meta<typeof TransitionContainerStory> = {
  title: 'Components/Estruturas/TransitionContainer',
  component: TransitionContainerStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Controla a entrada (`true`) e a saída (`false`).',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'State',
      },
    },
    animation: {
      description:
        'Efeitos de entrada/saída. Aceita um efeito ou um array para combiná-los.',
      control: { type: 'check' },
      options: effects,
      table: {
        type: {
          summary: `"fade" | "zoom" | "slideFromTop" | "slideFromBottom"
            | "slideFromLeft" | "slideFromRight" | TransitionEffect[]`,
        },
        defaultValue: { summary: "['fade']" },
        category: 'Style',
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
  },
  args: {
    isOpen: true,
    animation: ['fade'],
    children: 'Conteúdo animado',
  },
};

export default meta;
type Story = StoryObj<typeof TransitionContainerStory>;

export const Default: Story = {
  play: testDefaultTransitionContainer,
};

export const Zoom: Story = {
  args: { animation: ['zoom'] },
};

export const SlideFromBottom: Story = {
  args: { animation: ['slideFromBottom'] },
};

export const Composed: Story = {
  args: { animation: ['fade', 'slideFromBottom'] },
};
