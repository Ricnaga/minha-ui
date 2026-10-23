import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import CardFooter from '../CardFooter.vue';

describe('CardFooter', () => {
  it('should render cardfooter with children', () => {
    const wrapper = mount(CardFooter, {
      slots: { default: 'Conteúdo do Card Footer' },
    });
    expect(wrapper.text()).toContain('Conteúdo do Card Footer');
  });

  it('should merge the class with the variant classes', () => {
    const wrapper = mount(CardFooter, {
      props: { class: 'p-4' },
      slots: { default: 'Conteúdo do Card Footer' },
    });
    expect(wrapper.classes()).toContain('p-4');
  });
});
