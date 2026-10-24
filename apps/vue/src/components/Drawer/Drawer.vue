<script setup lang="ts">
import DrawerContainer from '../DrawerContainer/DrawerContainer.vue';
import { useDrawerProvider } from './useDrawer';
import type { UseDrawerProviderProps } from './drawer.types';

const props = defineProps<UseDrawerProviderProps>();
useDrawerProvider(props);
</script>

<template>
  <DrawerContainer>
    <slot />
  </DrawerContainer>
</template>
