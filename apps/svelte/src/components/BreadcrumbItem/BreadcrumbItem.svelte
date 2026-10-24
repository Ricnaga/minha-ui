<script lang="ts">
  import type { BreadcrumbItemProps } from './breadcrumb-item.types';
  import { useBreadcrumbItem } from './useBreadcrumbItem.svelte';

  const props: BreadcrumbItemProps = $props();
  const { itemProps } = useBreadcrumbItem(() => props);
</script>

<li {...itemProps}>
  {@render props.children?.()}
</li>
