<script lang="ts">
  import type { BreadcrumbListProps } from './breadcrumb-list.types';
  import { useBreadcrumbList } from './useBreadcrumbList.svelte';

  const props: BreadcrumbListProps = $props();
  const { listProps } = useBreadcrumbList(() => props);
</script>

<ol {...listProps}>
  {@render props.children?.()}
</ol>
