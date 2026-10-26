<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultBroadcastChannel } from './useBroadcastChannel.play';
  import UseBroadcastChannelStory from './UseBroadcastChannelStory.svelte';

  const meta = {
    title: 'Runes/useBroadcastChannel',
    component: UseBroadcastChannelStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseBroadcastChannelStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultBroadcastChannel}>
  <UseBroadcastChannelStory />
</Story>
