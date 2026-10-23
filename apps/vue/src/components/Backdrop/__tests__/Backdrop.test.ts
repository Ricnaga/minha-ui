import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { Backdrop } from '../';

describe('Backdrop', () => {
  it('should render children', () => {
    const wrapper = mount(Backdrop, {
      props: { isOpen: true },
      slots: { default: 'Modal Content' },
    });

    expect(wrapper.text()).toContain('Modal Content');
  });
});
