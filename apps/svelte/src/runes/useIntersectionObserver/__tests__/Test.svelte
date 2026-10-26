<script lang="ts">
  import { useIntersectionObserver } from '../';

  const observer = useIntersectionObserver({ threshold: 0.5 });
</script>

<div data-testid="target" use:observer.action>Target</div>
