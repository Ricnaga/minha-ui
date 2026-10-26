<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultIntersectionObserver } from './useIntersectionObserver.play';
  import UseIntersectionObserverStory from './UseIntersectionObserverStory.svelte';

  const meta = {
    title: 'Runes/useIntersectionObserver',
    component: UseIntersectionObserverStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseIntersectionObserverStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultIntersectionObserver}>
  <UseIntersectionObserverStory />
</Story>
