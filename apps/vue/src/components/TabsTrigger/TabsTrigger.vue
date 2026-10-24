<script setup lang="ts">
import { useTabsTrigger } from './useTabsTrigger';
import type { UseTabsTriggerProps } from './tabs-trigger.types';

const props = defineProps<UseTabsTriggerProps>();
const { tabsTriggerProps } = useTabsTrigger(props);
const tt = tabsTriggerProps as unknown as Record<string, any>;
</script>

<template>
  <button :id="tt.id" :type="tt.type" @click="tt.onClick" :aria-selected="tt['aria-selected']" :aria-busy="tt['aria-busy']" :aria-controls="tt['aria-controls']" :tabindex="tt.tabindex" :role="tt.role" :class="tt.class">
    <slot />
  </button>
</template>
