<script setup lang="ts">
import { useDrawerFooter } from './useDrawerFooter';
import type { DrawerFooterProps } from './drawer-footer.types';

const props = defineProps<DrawerFooterProps>();
const { drawerFooterProps } = useDrawerFooter(props);
</script>

<template>
  <footer v-bind="drawerFooterProps">
    <slot />
  </footer>
</template>
