<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import UseResourceStory from './UseResourceStory.svelte';

  const meta = {
    title: 'Runes/useResource',
    component: UseResourceStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseResourceStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default">
  <UseResourceStory />
</Story>
