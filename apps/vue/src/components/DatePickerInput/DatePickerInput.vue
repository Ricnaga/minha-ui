<script setup lang="ts">
import Input from '../Input/Input.vue';
import { useDatePickerInput } from './useDatePickerInput';

const { inputProps } = useDatePickerInput();
</script>

<template>
  <Input v-bind="inputProps" />
</template>
