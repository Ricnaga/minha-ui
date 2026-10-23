<script lang="ts">
  import { CardDescription } from '../';
  import type { CardDescriptionProps } from '../card-description.types';

  type CardDescriptionStoryProps = Omit<CardDescriptionProps, 'children'> & {
    children?: string;
  };

  let {
    children = 'Conteúdo do card description',
    ...props
  }: CardDescriptionStoryProps = $props();
</script>

<CardDescription {...props}>{children}</CardDescription>
