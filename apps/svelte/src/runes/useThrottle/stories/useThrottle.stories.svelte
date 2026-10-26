<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultThrottle } from './useThrottle.play';
  import UseThrottleStory from './UseThrottleStory.svelte';

  const meta = {
    title: 'Runes/useThrottle',
    component: UseThrottleStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseThrottleStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultThrottle}>
  <UseThrottleStory />
</Story>
