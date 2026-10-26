<script setup lang="ts">
import { useDisclosure } from '../useDisclosure';

const disclosure = useDisclosure();
</script>

<template>
  <div class="p-6 flex flex-col gap-4">
    <p class="text-sm">Aberto: {{ disclosure.isOpen.value ? 'sim' : 'não' }}</p>
    <div class="flex gap-2">
      <button @click="disclosure.handleToggle" class="px-4 py-2 rounded bg-blue-600 text-white">Alternar</button>
      <button @click="disclosure.handleOpen" class="px-4 py-2 rounded bg-green-600 text-white">Abrir</button>
      <button @click="disclosure.handleClose" class="px-4 py-2 rounded bg-red-600 text-white">Fechar</button>
    </div>
  </div>
</template>
