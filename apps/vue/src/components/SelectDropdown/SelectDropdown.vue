<script setup lang="ts">
import Popover from '../Popover/Popover.vue';
import SelectInput from './_components/SelectInput/SelectInput.vue';
import SelectItem from './_components/SelectItem/SelectItem.vue';
import { useSelectDropdown } from './useSelectDropdown';

const { isOpen, handleOpen } = useSelectDropdown();
</script>

<template>
  <Popover :is-open="isOpen" :on-popover-change="handleOpen" padding="sm" width="trigger">
    <SelectInput />
    <SelectItem />
  </Popover>
</template>
