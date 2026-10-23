import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import CardActions from '../CardActions.vue';

describe('CardActions', () => {
  it('should render cardactions with children', () => {
    const wrapper = mount(CardActions, {
      slots: { default: 'Conteúdo do Card Actions' },
    });
    expect(wrapper.text()).toContain('Conteúdo do Card Actions');
  });

  it('should merge the class with the variant classes', () => {
    const wrapper = mount(CardActions, {
      props: { class: 'p-4' },
      slots: { default: 'Conteúdo do Card Actions' },
    });
    expect(wrapper.classes()).toContain('p-4');
  });
});
