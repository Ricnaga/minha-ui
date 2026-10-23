<script lang="ts">
  import { CardActions } from '../';
  import type { CardActionsProps } from '../card-actions.types';

  type CardActionsStoryProps = Omit<CardActionsProps, 'children'> & {
    children?: string;
  };

  let {
    children = 'Conteúdo do Card Actions',
    ...props
  }: CardActionsStoryProps = $props();
</script>

<CardActions {...props}>{children}</CardActions>
