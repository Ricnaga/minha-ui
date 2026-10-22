export function useRipple() {
  function handleRipple(event: MouseEvent) {
    const target = event.currentTarget;

    if (!(target instanceof HTMLElement)) return;

    const rect = target.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = [
      'absolute bg-white rounded-full',
      'transform scale-0 opacity-50',
      'transition-all duration-800 ease-out',
      'pointer-events-none',
    ].join(' ');

    target.appendChild(ripple);

    // força o recálculo do estilo antes de ativar a animação
    setTimeout(() => {
      ripple.classList.remove('scale-0', 'opacity-50');
      ripple.classList.add('scale-100', 'opacity-0');
    }, 0);

    // remove o ripple após a animação
    setTimeout(() => {
      ripple.remove();
    }, 800);
  }

  return { handleRipple };
}
