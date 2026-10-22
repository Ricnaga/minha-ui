<script lang="ts">
  import { Button } from '../';
  import type { ButtonProps } from '../button.types';

  type ButtonStoryProps = Omit<ButtonProps, 'children'> & {
    children?: string;
  };

  let { children = 'Button', ...props }: ButtonStoryProps = $props();
</script>

<Button {...props}>{children}</Button>
