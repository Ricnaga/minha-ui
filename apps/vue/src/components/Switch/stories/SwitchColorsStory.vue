<script setup lang="ts">
import Switch from '../Switch.vue';

defineProps<{
  size?: 'small' | 'medium';
  color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  disabled?: boolean;
}>();
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Switch v-bind="$props" color="primary" :default-checked="true" label="primary" />
    <Switch v-bind="$props" color="secondary" :default-checked="true" label="secondary" />
    <Switch v-bind="$props" color="success" :default-checked="true" label="success" />
    <Switch v-bind="$props" color="info" :default-checked="true" label="info" />
    <Switch v-bind="$props" color="warning" :default-checked="true" label="warning" />
    <Switch v-bind="$props" color="error" :default-checked="true" label="error" />
  </div>
</template>
