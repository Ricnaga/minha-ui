import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCheckbox } from './Checkbox.play';
import CheckboxStory from './CheckboxStory.svelte';

const meta: Meta<typeof CheckboxStory> = {
  title: 'Components/Formularios/Checkbox',
  component: CheckboxStory,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CheckboxStory>;

export const Default: Story = {
  play: testDefaultCheckbox,
};
