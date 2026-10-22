import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { fn } from 'storybook/test';
import { h } from 'vue';

import { Accordion } from '../';
import { testDefaultAccordion } from './Accordion.play';
import AccordionStory from './AccordionStory.vue';

const meta: Meta<typeof AccordionStory> = {
  title: 'Components/Interação/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'single',
    onValueChange: fn(),
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['single', 'multiple'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccordionStory>;

export const Default: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => h(AccordionStory, { ...args, defaultValue: ['item-1'] }),
  play: testDefaultAccordion,
};

export const Responsive: Story = {
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
  parameters: {
    layout: 'padded',
  },
  args: {
    type: 'single',
    size: 'md',
  },
  render: (args) => h(AccordionStory, args),
};
