<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import UseInfiniteScrollStory from './UseInfiniteScrollStory.svelte';

  const meta = {
    title: 'Runes/useInfiniteScroll',
    component: UseInfiniteScrollStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseInfiniteScrollStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default">
  <UseInfiniteScrollStory />
</Story>
