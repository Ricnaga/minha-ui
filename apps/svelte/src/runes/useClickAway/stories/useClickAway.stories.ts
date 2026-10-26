import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultClickAway } from './useClickAway.play';
import UseClickAwayStory from './UseClickAwayStory.svelte';

const meta: Meta<typeof UseClickAwayStory> = {
  title: 'Runes/useClickAway',
  component: UseClickAwayStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseClickAwayStory> = {
  render: () => ({
    Component: UseClickAwayStory,
  }),
  play: testDefaultClickAway,
};
