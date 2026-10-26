<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultCopyToClipboard } from './useCopyToClipboard.play';
  import UseCopyToClipboardStory from './UseCopyToClipboardStory.svelte';

  const meta = {
    title: 'Runes/useCopyToClipboard',
    component: UseCopyToClipboardStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseCopyToClipboardStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultCopyToClipboard}>
  <UseCopyToClipboardStory />
</Story>
