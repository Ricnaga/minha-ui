<script module lang="ts">
  import type { Meta } from '@storybook/svelte';
  import { testDefaultClickAway } from './useClickAway.play';
  import UseClickAwayStory from './UseClickAwayStory.svelte';

  const meta = {
    title: 'Runes/useClickAway',
    component: UseClickAwayStory,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<UseClickAwayStory>;

  export default meta;
</script>

<script lang="ts">
  const { Story } = $props();
</script>

<Story name="Default" play={testDefaultClickAway}>
  <UseClickAwayStory />
</Story>
