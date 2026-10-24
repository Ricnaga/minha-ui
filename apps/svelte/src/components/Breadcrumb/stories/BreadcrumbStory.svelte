<script lang="ts">
  import HouseIcon from 'phosphor-svelte/lib/HouseIcon';
  import Breadcrumb from '../Breadcrumb.svelte';
  import BreadcrumbItem from '../../BreadcrumbItem/BreadcrumbItem.svelte';
  import BreadcrumbLink from '../../BreadcrumbLink/BreadcrumbLink.svelte';
  import BreadcrumbList from '../../BreadcrumbList/BreadcrumbList.svelte';
  import BreadcrumbPage from '../../BreadcrumbPage/BreadcrumbPage.svelte';
  import BreadcrumbSeparator from '../../BreadcrumbSeparator/BreadcrumbSeparator.svelte';

  let {
    size,
    separator,
    icons = false,
    sizes = false,
    responsive = false,
    'aria-label': ariaLabel,
  }: {
    size?: 'sm' | 'md' | 'lg';
    separator?: string;
    icons?: boolean;
    sizes?: boolean;
    responsive?: boolean;
    'aria-label'?: string;
  } = $props();
</script>

{#if sizes}
  <div class="flex w-96 flex-col gap-6">
    {#each ['sm', 'md', 'lg'] as const as s (s)}
      <Breadcrumb size={s} aria-label={`Breadcrumb ${s}`}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detalhes ({s})</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    {/each}
  </div>
{:else if responsive}
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/categorias">Categorias</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/categorias/eletronicos"
          >Eletrônicos</BreadcrumbLink
        >
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Detalhes</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
{:else}
  <div class="w-96">
    <Breadcrumb {size} {separator} aria-label={ariaLabel}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            class={icons ? 'inline-flex items-center gap-1.5' : undefined}
          >
            {#if icons}
              <HouseIcon aria-hidden="true" />
              Home
            {:else}
              Home
            {/if}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Detalhes</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>
{/if}
