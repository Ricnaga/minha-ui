<script lang="ts">
  import { useInfiniteScroll } from '../';

  const infiniteScroll = useInfiniteScroll({ onLoadMore: async () => {} });
</script>

<div data-testid="target" use:infiniteScroll.action></div>
