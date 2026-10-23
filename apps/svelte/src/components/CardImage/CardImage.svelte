<script lang="ts">
  import type { CardImageProps } from './card-image.types';
  import { useCardImage } from './useCardImage.svelte';

  const {
    rounded,
    aspect,
    class: className,
    ...attrs
  }: CardImageProps = $props();

  const { cardImageProps } = useCardImage(() => ({
    rounded,
    aspect,
    class: className,
  }));
</script>

<img {...attrs} {...cardImageProps} />
