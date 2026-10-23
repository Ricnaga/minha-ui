import type { Meta, StoryObj } from '@storybook/svelte-vite';

import { testDefaultCardBody } from './CardBody.play';
import CardBodyStory from './CardBodyStory.svelte';

const meta: Meta<typeof CardBodyStory> = {
  title: 'Components/Estruturas/Card/CardBody',
  component: CardBodyStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardBodyStory>;

export const Default: Story = {
  play: testDefaultCardBody,
};
