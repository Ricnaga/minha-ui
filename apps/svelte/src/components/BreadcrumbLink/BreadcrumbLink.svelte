<script lang="ts">
  import type { BreadcrumbLinkProps } from './breadcrumb-link.types';
  import { useBreadcrumbLink } from './useBreadcrumbLink.svelte';

  const props: BreadcrumbLinkProps = $props();
  const { linkProps } = useBreadcrumbLink(() => props);
</script>

<a {...linkProps}>
  {@render props.children?.()}
</a>
