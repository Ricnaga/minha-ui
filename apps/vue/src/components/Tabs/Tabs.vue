<script setup lang="ts">
import { useTabsProvider } from './useTabs';
import type { UseTabsContextProps } from './tabs.types';

const props = defineProps<UseTabsContextProps>();
useTabsProvider(props);
</script>

<template>
  <slot />
</template>
