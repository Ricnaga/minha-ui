import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultCheckbox } from './Checkbox.play';
import CheckboxStory from './CheckboxStory.vue';

const meta = {
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
} satisfies Meta<typeof CheckboxStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: testDefaultCheckbox,
};
