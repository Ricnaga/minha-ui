<script lang="ts">
  import { useClickAway } from '../';

  let isOpen = $state(false);
  let log = $state('Nenhum clique fora ainda');

  const clickAway = useClickAway({
    enabled: isOpen,
    onOutsideClick: () => {
      log = '➡️ Clique fora detectado';
      isOpen = false;
    },
  });

  const open = () => {
    isOpen = true;
    log = 'Caixa aberta novamente';
  };
</script>

<div class="p-10">
  <p>
    Clique <strong>dentro</strong> da caixa não faz nada. Clique
    <strong>fora</strong> fecha a caixa.
  </p>

  <button
    class="text-white rounded p-1 cursor-pointer bg-blue-600"
    onclick={open}
  >
    Abrir caixa
  </button>

  <div class="mt-6">
    {#if isOpen}
      <div
        use:clickAway.action
        class="p-5 border-2 border-neutral-500 w-64 bg-amber-400"
      >
        Clique dentro de mim
      </div>
    {/if}
  </div>

  <p class="mt-7">
    <strong>Status:</strong> {log}
  </p>
</div>
