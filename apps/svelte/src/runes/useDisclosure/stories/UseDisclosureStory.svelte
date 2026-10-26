<script lang="ts">
  import { useDisclosure } from '../useDisclosure.svelte';

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
</script>

<div class="flex flex-col gap-4">
  <div class="flex gap-2">
    <button
      onclick={onToggle}
      class="px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      {isOpen ? 'Desativar' : 'Ativar'}
    </button>
    <button
      onclick={onOpen}
      class="px-4 py-2 bg-green-700 text-white rounded-md"
    >
      Abrir
    </button>
    <button
      onclick={onClose}
      class="px-4 py-2 bg-red-600 text-white rounded-md"
    >
      Fechar
    </button>
  </div>
  <div>Status: {isOpen ? 'Ativo' : 'Inativo'}</div>
</div>
