<script lang="ts">
  import { CardSubtitle } from '../';
  import type { CardSubtitleProps } from '../card-subtitle.types';

  type CardSubtitleStoryProps = Omit<CardSubtitleProps, 'children'> & {
    children?: string;
  };

  let {
    children = 'Conteúdo do card sub title',
    ...props
  }: CardSubtitleStoryProps = $props();
</script>

<CardSubtitle {...props}>{children}</CardSubtitle>
