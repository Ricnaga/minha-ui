<script lang="ts">
  import type { BreadcrumbProps } from './breadcrumb.types';
  import { useBreadcrumbProvider } from './useBreadcrumb.svelte';

  const props: BreadcrumbProps = $props();
  const { breadcrumbProps } = useBreadcrumbProvider(() => props);
</script>

<nav {...breadcrumbProps}>
  {@render props.children?.()}
</nav>
