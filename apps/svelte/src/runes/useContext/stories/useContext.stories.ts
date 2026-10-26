import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultContext } from './useContext.play';
import ContextStory from './ContextStory.svelte';

const meta: Meta<typeof ContextStory> = {
  title: 'Runes/useContext',
  component: ContextStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof ContextStory> = {
  render: () => ({
    Component: ContextStory,
  }),
  play: testDefaultContext,
};
