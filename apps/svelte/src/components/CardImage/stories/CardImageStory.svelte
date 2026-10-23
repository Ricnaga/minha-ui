<script lang="ts">
  import { CardImage } from '../';
  import type { CardImageProps } from '../card-image.types';

  type CardImageStoryProps = Omit<CardImageProps, 'children'>;

  let {
    src = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    alt = 'Imagem ilustrativa do card',
    class: className = 'w-64',
    ...props
  }: CardImageStoryProps = $props();
</script>

<CardImage {src} {alt} class={className} {...props} />
