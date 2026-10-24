import { tv } from 'tailwind-variants';

export const modalContent = tv({
  base: [
    'overflow-y-auto overscroll-contain p-4',
    // Mobile: aproveita a altura do container full-screen; desktop: viewport do modal.
    'max-h-[calc(100dvh-10rem)] sm:max-h-[calc(80vh-2rem)]',
  ],
});


export type ModalContentVariants = {};
