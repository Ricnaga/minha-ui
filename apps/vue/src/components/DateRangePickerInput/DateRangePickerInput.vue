<script setup lang="ts">
import Input from '../Input/Input.vue';
import { useDateRangePickerInput } from './useDateRangePickerInput';

const { inputProps } = useDateRangePickerInput();
</script>

<template>
  <Input v-bind="inputProps" />
</template>
