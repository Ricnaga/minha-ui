<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import UseFetchStory from './UseFetchStory.svelte';

  const meta = {
    title: 'Runes/useFetch',
    component: UseFetchStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseFetchStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default">
  <UseFetchStory />
</Story>
