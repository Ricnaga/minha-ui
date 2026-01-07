import type { MouseEvent } from "react";

export function useRipple() {
  const handleRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = `
      absolute bg-white rounded-full 
      transform scale-0 opacity-50
      transition-all duration-800 ease-out
      pointer-events-none
    `;

    button.appendChild(ripple);

    // força recalculo do estilo antes de ativar a animação
    setTimeout(() => {
      ripple.classList.remove("scale-0", "opacity-50");
      ripple.classList.add("scale-100", "opacity-0");
    }, 0);

    // remove o ripple após animação
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  return { handleRipple };
}
