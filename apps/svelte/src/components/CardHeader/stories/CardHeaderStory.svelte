<script lang="ts">
  import { CardHeader } from '../';
  import type { CardHeaderProps } from '../card-header.types';

  type CardHeaderStoryProps = Omit<CardHeaderProps, 'children'> & {
    children?: string;
  };

  let { children = 'Conteúdo do Card Header', ...props }: CardHeaderStoryProps =
    $props();
</script>

<CardHeader {...props}>{children}</CardHeader>
