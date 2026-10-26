<script lang="ts">
  import * as Icons from 'phosphor-svelte';

  const entries = Object.entries(Icons).filter(([name]) => {
    if (name === 'default') return false;
    const comp = (Icons as any)[name];
    return typeof comp === 'function' || (typeof comp === 'object' && comp !== null);
  }) as [string, any][];
</script>

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:16px;padding:24px">
  {#each entries as [name, Icon]}
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:12px;border:1px solid #e5e7eb;border-radius:8px">
      <svelte:component this={Icon} size={24} />
      <span style="font-size:10px;text-align:center;word-break:break-all">{name}</span>
    </div>
  {/each}
</div>
