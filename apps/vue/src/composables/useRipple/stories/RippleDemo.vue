<script setup lang="ts">
import { useRipple } from '../';

const { handleRipple } = useRipple();
</script>

<template>
  <button
    class="relative overflow-hidden px-6 py-3 bg-blue-600 text-white rounded-md"
    @click="handleRipple"
  >
    Clique aqui
  </button>
</template>
