<script lang="ts">
  import { CardFooter } from '../';
  import type { CardFooterProps } from '../card-footer.types';

  type CardFooterStoryProps = Omit<CardFooterProps, 'children'> & {
    children?: string;
  };

  let { children = 'Conteúdo do Card Footer', ...props }: CardFooterStoryProps =
    $props();
</script>

<CardFooter {...props}>{children}</CardFooter>
