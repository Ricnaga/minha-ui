import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Button from '../Button.vue';

describe('Button', () => {
  it('should render the component', () => {
    const wrapper = mount(Button);

    expect(wrapper.exists()).toBe(true);
  });
});
