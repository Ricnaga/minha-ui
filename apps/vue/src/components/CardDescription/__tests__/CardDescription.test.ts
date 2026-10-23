import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import CardDescription from '../CardDescription.vue';

describe('CardDescription', () => {
  it('should render carddescription with children', () => {
    const wrapper = mount(CardDescription, {
      slots: { default: 'Conteúdo do card description' },
    });
    expect(wrapper.text()).toContain('Conteúdo do card description');
  });

  it('should merge the class with the variant classes', () => {
    const wrapper = mount(CardDescription, {
      props: { class: 'p-4' },
      slots: { default: 'Conteúdo do card description' },
    });
    expect(wrapper.classes()).toContain('p-4');
  });
});
