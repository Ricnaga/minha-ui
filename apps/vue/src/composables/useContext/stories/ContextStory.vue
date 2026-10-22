<script setup lang="ts">
import ContextConsumer from './ContextConsumer.vue';
import ContextProvider from './ContextProvider.vue';
</script>

<template>
  <ContextProvider>
    <ContextConsumer />
  </ContextProvider>
</template>
