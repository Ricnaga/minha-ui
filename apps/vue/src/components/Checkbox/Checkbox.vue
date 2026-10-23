<script setup lang="ts">
import { useCheckbox } from './useCheckbox';

const props = defineProps<{
  class?: string;
  disabled?: boolean;
  indeterminate?: boolean;
}>();

const { checkBoxProps } = useCheckbox(props);
</script>

<template>
  <input v-bind="checkBoxProps">
</template>
