import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultToggle } from './useToggle.play';
import UseToggleStory from './UseToggleStory.svelte';

const meta: Meta<typeof UseToggleStory> = {
  title: 'Runes/useToggle',
  component: UseToggleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseToggleStory> = {
  render: () => ({
    Component: UseToggleStory,
  }),
  play: testDefaultToggle,
};
