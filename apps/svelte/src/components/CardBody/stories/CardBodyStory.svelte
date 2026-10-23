<script lang="ts">
  import { CardBody } from '../';
  import type { CardBodyProps } from '../card-body.types';

  type CardBodyStoryProps = Omit<CardBodyProps, 'children'> & {
    children?: string;
  };

  let { children = 'Conteúdo do Card Body', ...props }: CardBodyStoryProps =
    $props();
</script>

<CardBody {...props}>{children}</CardBody>
