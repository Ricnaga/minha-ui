import type { Meta, StoryObj } from '@storybook/svelte';
import DateStories from './components/DateStories.svelte';

const meta: Meta<typeof DateStories> = {
  title: 'Utils/Date',
  component: DateStories,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FormatToDate: Story = {};

export const FormatISOToDateBR: Story = {};
