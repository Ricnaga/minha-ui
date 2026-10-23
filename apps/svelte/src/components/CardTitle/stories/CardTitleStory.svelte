<script lang="ts">
  import { CardTitle } from '../';
  import type { CardTitleProps } from '../card-title.types';

  type CardTitleStoryProps = Omit<CardTitleProps, 'children'> & {
    children?: string;
  };

  let {
    children = 'Conteúdo do card title',
    as,
    ...props
  }: CardTitleStoryProps = $props();
</script>

<CardTitle {as} {...props}>{children}</CardTitle>
