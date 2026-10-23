<script lang="ts">
  import { Card } from '../';
  import type { CardProps } from '../card.types';

  type CardStoryProps = Omit<CardProps, 'children'> & {
    children?: string;
  };

  let { children = 'Conteúdo do Card', ...props }: CardStoryProps = $props();
</script>

<Card {...props}>{children}</Card>
