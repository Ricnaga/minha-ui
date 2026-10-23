<script lang="ts">
  import { Backdrop } from '../';
  import type { BackdropProps } from '../backdrop.types';

  let { zIndex = 1000, isLoading = false, onClose }: BackdropProps = $props();

  let isOpen = $state(false);

  function open() {
    isOpen = true;
    setTimeout(() => {
      isOpen = false;
    }, 3000);
  }

  $effect(() => {
    if (isOpen) {
      setTimeout(() => {
        isOpen = false;
      }, 3000);
    }
  });
</script>

<div class="text-center">
  <button
    onclick={open}
    class="cursor-pointer bg-blue-600 rounded p-2 text-white"
  >
    Ativar backdrop
  </button>
  <p>Após 3 segundos o backdrop retorna ao estado inicial</p>
  <Backdrop {isOpen} {zIndex} {isLoading} {onClose} />
</div>
