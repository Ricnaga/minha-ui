<script setup lang="ts">
import SelectDropdown from '../SelectDropdown/SelectDropdown.vue';
import SelectProvider from '../SelectProvider/SelectProvider.vue';
import { useSelect } from './useSelect';
import type { SelectProps } from './select.types';

const props = defineProps<SelectProps>();
const { selectProps } = useSelect(props);
</script>

<template>
  <SelectProvider v-bind="selectProps">
    <SelectDropdown />
  </SelectProvider>
</template>
