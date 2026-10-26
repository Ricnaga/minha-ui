<script lang="ts">
  import { useIntersectionObserver } from '../';

  const observer = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    once: false,
  });
</script>

<div class="h-[200vh] p-12">
  <p class="mb-6 text-lg text-gray-700">
    Scroll para ver o elemento observável
  </p>

  <div
    use:observer.action
    class="mt-[150vh] h-24 flex items-center justify-center font-bold text-white transition-colors duration-300 {observer.isIntersecting
      ? 'bg-green-700'
      : 'bg-red-600'}"
  >
    {observer.isIntersecting ? 'Visível' : 'Fora da tela'}
  </div>
</div>
