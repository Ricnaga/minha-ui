<script setup lang="ts">
import { useToggle } from '../useToggle';

const toggle = useToggle(false);
</script>

<template>
  <div class="p-6 flex flex-col gap-4">
    <p class="text-sm">Valor: {{ toggle.isToggle.value ? 'true' : 'false' }}</p>
    <div class="flex gap-2">
      <button @click="toggle.handleToggle" class="px-4 py-2 rounded bg-blue-600 text-white">Toggle</button>
      <button @click="toggle.handleOpen" class="px-4 py-2 rounded bg-green-600 text-white">Open</button>
      <button @click="toggle.handleClose" class="px-4 py-2 rounded bg-red-600 text-white">Close</button>
      <button @click="() => toggle.setAsToggle(true)" class="px-4 py-2 rounded bg-gray-600 text-white">Set true</button>
      <button @click="() => toggle.setAsToggle(false)" class="px-4 py-2 rounded bg-gray-600 text-white">Set false</button>
    </div>
  </div>
</template>
