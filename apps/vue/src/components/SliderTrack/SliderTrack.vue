<script setup lang="ts">
import { useSliderTrack } from './useSliderTrack';
import type { UseSliderTrackProps } from './slider-track.types';

const props = defineProps<UseSliderTrackProps>();
const { trackProps } = useSliderTrack(props);
</script>

<template>
  <div v-bind="trackProps">
    <slot />
  </div>
</template>
