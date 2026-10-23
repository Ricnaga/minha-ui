<script setup lang="ts">
import { Skeleton } from '../';
import type { SkeletonProps } from '../skeleton.types';

type SkeletonStoryProps = SkeletonProps;

const props = withDefaults(defineProps<SkeletonStoryProps>(), {
  shape: undefined,
  class: undefined,
});
</script>

<template>
  <Skeleton :shape="props.shape" :class="props.class" />
</template>
