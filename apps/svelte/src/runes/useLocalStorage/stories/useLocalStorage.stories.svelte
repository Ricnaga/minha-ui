<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultLocalStorage } from './useLocalStorage.play';
  import UseLocalStorageStory from './UseLocalStorageStory.svelte';

  const meta = {
    title: 'Runes/useLocalStorage',
    component: UseLocalStorageStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseLocalStorageStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultLocalStorage}>
  <UseLocalStorageStory />
</Story>
