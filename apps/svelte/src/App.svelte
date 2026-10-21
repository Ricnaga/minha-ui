<script lang="ts">
  import { Button } from './components';

  const message = 'minha-ui — Svelte';
</script>

<main class="flex min-h-screen flex-col items-center justify-center gap-4">
  <h1 class="text-2xl font-semibold">{message}</h1>
  <Button>Componente de exemplo</Button>
</main>
