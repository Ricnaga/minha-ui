import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import CardSubtitle from '../CardSubtitle.vue';

describe('CardSubtitle', () => {
  it('should render cardsubtitle with children', () => {
    const wrapper = mount(CardSubtitle, {
      slots: { default: 'Conteúdo do card sub title' },
    });
    expect(wrapper.text()).toContain('Conteúdo do card sub title');
  });

  it('should merge the class with the variant classes', () => {
    const wrapper = mount(CardSubtitle, {
      props: { class: 'p-4' },
      slots: { default: 'Conteúdo do card sub title' },
    });
    expect(wrapper.classes()).toContain('p-4');
  });
});
