import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { testDefaultClickAway } from './useClickAway.play';
import UseClickAwayStory from './UseClickAwayStory.vue';

const meta: Meta<typeof UseClickAwayStory> = {
  title: 'Composables/useClickAway',
  component: UseClickAwayStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseClickAwayStory> = {
  render: () => ({
    components: { UseClickAwayStory },
    template: '<UseClickAwayStory />',
  }),
  play: testDefaultClickAway,
};
