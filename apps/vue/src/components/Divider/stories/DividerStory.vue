<script setup lang="ts">
import { Divider } from '../';
import type { DividerProps } from '../divider.types';

type DividerStoryProps = DividerProps;

const props = withDefaults(defineProps<DividerStoryProps>(), {
  orientation: undefined,
  inset: undefined,
  class: undefined,
});
</script>

<template>
  <Divider
    :orientation="props.orientation"
    :inset="props.inset"
    :class="props.class"
  />
</template>
