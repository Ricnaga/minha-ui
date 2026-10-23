import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import CardBody from '../CardBody.vue';

describe('CardBody', () => {
  it('should render cardbody with children', () => {
    const wrapper = mount(CardBody, {
      slots: { default: 'Conteúdo do Card Body' },
    });
    expect(wrapper.text()).toContain('Conteúdo do Card Body');
  });

  it('should merge the class with the variant classes', () => {
    const wrapper = mount(CardBody, {
      props: { class: 'p-4' },
      slots: { default: 'Conteúdo do Card Body' },
    });
    expect(wrapper.classes()).toContain('p-4');
  });
});
