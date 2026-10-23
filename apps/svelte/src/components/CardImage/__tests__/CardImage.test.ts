import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';

import CardImage from '../CardImage.svelte';

describe('CardImage', () => {
  it('should render image correctly', () => {
    const { container } = render(CardImage, {
      props: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
      },
    });
    expect(container.querySelector('img')).toBeTruthy();
  });

  it('should apply rounded classes', () => {
    const { container } = render(CardImage, {
      props: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
        rounded: 'lg',
      },
    });
    expect(container.querySelector('img')?.className).toContain('rounded-lg');
  });

  it('should merge the class with the variant classes', () => {
    const { container } = render(CardImage, {
      props: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
        class: 'w-64',
      },
    });
    expect(container.querySelector('img')?.className).toContain('w-64');
  });
});
