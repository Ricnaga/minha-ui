<script lang="ts">
  import type { BreadcrumbPageProps } from './breadcrumb-page.types';
  import { useBreadcrumbPage } from './useBreadcrumbPage.svelte';

  const props: BreadcrumbPageProps = $props();
  const { pageProps } = useBreadcrumbPage(() => props);
</script>

<span {...pageProps}>
  {@render props.children?.()}
</span>
