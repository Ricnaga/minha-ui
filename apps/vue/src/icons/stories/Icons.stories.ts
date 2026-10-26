import type { Meta, StoryObj } from '@storybook/vue3';
import * as PhosphorIcons from '@phosphor-icons/vue';

const iconEntries = Object.entries(PhosphorIcons).filter(([name]) => {
  return typeof (PhosphorIcons as any)[name] === 'object' || typeof (PhosphorIcons as any)[name] === 'function';
}) as [string, any][];

const meta: Meta = {
  title: 'Icons/All',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

export const AllIcons: StoryObj = {
  render: () => ({
    components: Object.fromEntries(iconEntries),
    setup() {
      return { iconEntries };
    },
    template: `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:16px;padding:24px">
        <div v-for="([name, Icon]) in iconEntries" :key="name" style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;border:1px solid #e5e7eb;border-radius:8px">
          <component :is="Icon" :size="24" weight="regular" />
          <span style="font-size:10px;text-align:center;word-break:break-all">{{ name }}</span>
        </div>
      </div>
    `,
  }),
};
