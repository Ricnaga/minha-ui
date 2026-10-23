import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { h } from 'vue';

import type { TransitionEffect } from '@/theme';
import { TransitionContainer } from '../';

import { testDefaultTransitionContainer } from './TransitionContainer.play';
import TransitionContainerStory from './TransitionContainerStory.vue';

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
  component: TransitionContainer,
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
        type: { summary: 'slot' },
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
  render: (args) => h(TransitionContainerStory, args),
  play: testDefaultTransitionContainer,
};

export const Zoom: Story = {
  args: { animation: ['zoom'] },
  render: (args) => h(TransitionContainerStory, args),
};

export const SlideFromBottom: Story = {
  args: { animation: ['slideFromBottom'] },
  render: (args) => h(TransitionContainerStory, args),
};

export const Composed: Story = {
  args: { animation: ['fade', 'slideFromBottom'] },
  render: (args) => h(TransitionContainerStory, args),
};
