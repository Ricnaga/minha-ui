import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { EmptyState } from '../';
describe('EmptyState', () => {
    it('should render the default message when no message is provided', () => {
        const wrapper = mount(EmptyState);
        expect(wrapper.text()).toContain('Nenhum resultado encontrado');
    });
});
