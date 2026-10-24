<script setup lang="ts">
import Input from '../../../Input/Input.vue';
import PopoverTrigger from '../../../PopoverTrigger/PopoverTrigger.vue';
import { useSelectInput } from './useSelectInput';

const { inputProps } = useSelectInput();
</script>

<template>
  <PopoverTrigger>
    <Input v-bind="inputProps" />
  </PopoverTrigger>
</template>
