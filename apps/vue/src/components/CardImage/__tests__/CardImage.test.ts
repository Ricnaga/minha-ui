import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import CardImage from '../CardImage.vue';

describe('CardImage', () => {
  it('should render image correctly', () => {
    const wrapper = mount(CardImage, {
      props: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
      },
    });
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should apply rounded classes', () => {
    const wrapper = mount(CardImage, {
      props: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
        rounded: 'lg',
      },
    });
    expect(wrapper.find('img').classes()).toContain('rounded-lg');
  });

  it('should merge the class with the variant classes', () => {
    const wrapper = mount(CardImage, {
      props: {
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
        alt: 'Imagem ilustrativa do card',
        class: 'w-64',
      },
    });
    expect(wrapper.find('img').classes()).toContain('w-64');
  });
});
