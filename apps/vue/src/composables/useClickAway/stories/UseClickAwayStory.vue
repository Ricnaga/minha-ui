<script setup lang="ts">
import { ref } from 'vue';
import { useClickAway } from '../';

const isOpen = ref(false);
const log = ref('Nenhum clique fora ainda');

const targetRef = useClickAway({
  enabled: isOpen.value,
  onOutsideClick: () => {
    log.value = '➡️ Clique fora detectado';
    isOpen.value = false;
  },
});

const open = () => {
  isOpen.value = true;
  log.value = 'Caixa aberta novamente';
};
</script>

<template>
  <div class="p-10">
    <p>
      Clique <strong>dentro</strong> da caixa não faz nada. Clique
      <strong>fora</strong> fecha a caixa.
    </p>

    <button
      class="text-white rounded p-1 cursor-pointer bg-blue-600"
      @click="open"
    >
      Abrir caixa
    </button>

    <div class="mt-6">
      <div
        v-if="isOpen"
        ref="targetRef"
        class="p-5 border-2 border-neutral-500 w-64 bg-amber-400"
      >
        Clique dentro de mim
      </div>
    </div>

    <p class="mt-7">
      <strong>Status:</strong> {{ log }}
    </p>
  </div>
</template>
