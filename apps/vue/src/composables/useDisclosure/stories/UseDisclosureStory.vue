<script setup lang="ts">
import { useDisclosure } from '../index';

const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
</script>

<template>
  <div>
    <button data-testid="open-button" @click="onOpen">Abrir</button>
    <button data-testid="close-button" @click="onClose">Fechar</button>
    <button data-testid="toggle-button" @click="onToggle">Alternar</button>
    <p data-testid="status">{{ isOpen ? 'Aberto' : 'Fechado' }}</p>
  </div>
</template>
