import type { Meta, StoryObj } from '@storybook/svelte';
import { testDefaultIntersectionObserver } from './useIntersectionObserver.play';
import UseIntersectionObserverStory from './UseIntersectionObserverStory.svelte';

const meta: Meta<typeof UseIntersectionObserverStory> = {
  title: 'Runes/useIntersectionObserver',
  component: UseIntersectionObserverStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UseIntersectionObserverStory> = {
  render: () => ({
    Component: UseIntersectionObserverStory,
  }),
  play: testDefaultIntersectionObserver,
};
