<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import UsePaginationStory from './UsePaginationStory.svelte';

  const meta = {
    title: 'Runes/usePagination',
    component: UsePaginationStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UsePaginationStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default">
  <UsePaginationStory />
</Story>
