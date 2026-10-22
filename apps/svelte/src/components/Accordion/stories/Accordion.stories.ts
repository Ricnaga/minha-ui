import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { fn } from 'storybook/test';

import { testDefaultAccordion } from './Accordion.play';
import AccordionStory from './AccordionStory.svelte';

const meta: Meta<typeof AccordionStory> = {
  title: 'Components/Interação/Accordion',
  component: AccordionStory,
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
    defaultValue: ['item-1'],
  },
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
};
