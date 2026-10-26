import type { Meta, StoryObj } from '@storybook/vue3';
import UseToggleStory from './UseToggleStory.vue';

const meta = {
  title: 'Composables/useToggle',
  component: UseToggleStory,
  tags: ['autodocs'],
} satisfies Meta<typeof UseToggleStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
