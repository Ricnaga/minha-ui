<script setup lang="ts">
import { useDrawerBody } from './useDrawerBody';
import type { DrawerBodyProps } from './drawer-body.types';

const props = defineProps<DrawerBodyProps>();
const { drawerBodyProps } = useDrawerBody(props);
</script>

<template>
  <section v-bind="drawerBodyProps">
    <slot />
  </section>
</template>
