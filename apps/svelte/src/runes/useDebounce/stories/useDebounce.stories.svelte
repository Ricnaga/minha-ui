<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultDebounce } from './useDebounce.play';
  import UseDebounceStory from './UseDebounceStory.svelte';

  const meta = {
    title: 'Runes/useDebounce',
    component: UseDebounceStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseDebounceStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultDebounce}>
  <UseDebounceStory />
</Story>
