import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import { ErrorState } from '../';

describe('ErrorState', () => {
  it('should render the default message when no message is provided', () => {
    const wrapper = mount(ErrorState);

    expect(wrapper.text()).toContain('Algo deu errado');
  });
});
