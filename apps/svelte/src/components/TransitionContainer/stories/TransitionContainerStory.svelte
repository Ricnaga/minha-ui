<script lang="ts">
  import { TransitionContainer } from '../';
  import type { TransitionContainerProps } from '../transition-container.types';

  type TransitionContainerStoryProps = Omit<
    TransitionContainerProps,
    'children'
  > & {
    children?: string;
  };

  let {
    isOpen,
    animation,
    children = 'Conteúdo animado',
  }: TransitionContainerStoryProps = $props();

  // `$derived` gravável: o botão sobrescreve o valor até o controle do
  // Storybook mudar o `isOpen` de novo.
  let isVisible = $derived(isOpen);
</script>

<div class="flex flex-col items-center gap-4">
  <button
    type="button"
    class="rounded bg-neutral-700 px-3 py-1 text-sm text-neutral-100"
    onclick={() => (isVisible = !isVisible)}
  >
    Alternar
  </button>
  <div
    class="flex h-40 w-72 items-center justify-center overflow-hidden rounded border border-dashed border-neutral-600"
  >
    <TransitionContainer
      isOpen={isVisible}
      {animation}
      data-testid="transition-container"
    >
      <span class="rounded bg-neutral-800 px-6 py-4 text-neutral-100">
        {children}
      </span>
    </TransitionContainer>
  </div>
</div>
