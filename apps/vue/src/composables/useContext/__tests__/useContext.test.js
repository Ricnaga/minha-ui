import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { defineComponent, h, provide } from 'vue';
import { useContext } from '../';
const testContext = Symbol('test');
function createConsumer(context, hookName = 'useTest', providerName = 'Test') {
    return defineComponent({
        setup() {
            const value = useContext({ context, hookName, providerName });
            return () => h('p', { 'data-testid': 'value' }, value);
        },
    });
}
function mockConsole() {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => { });
    return () => {
        errorSpy.mockRestore();
        warnSpy.mockRestore();
    };
}
describe('useContext', () => {
    it('should return context value when used within provider', () => {
        const Consumer = createConsumer(testContext);
        const Provider = defineComponent({
            setup(_, { slots }) {
                provide(testContext, 'test-value');
                return () => slots.default?.();
            },
        });
        const wrapper = mount(Provider, {
            slots: { default: () => h(Consumer) },
        });
        expect(wrapper.get('[data-testid="value"]').text()).toBe('test-value');
    });
    it('should throw error when used outside provider', () => {
        const restoreConsole = mockConsole();
        expect(() => mount(createConsumer(testContext))).toThrow('useTest must be used within a TestProvider');
        restoreConsole();
    });
    it('should use custom hook and provider names in error message', () => {
        const restoreConsole = mockConsole();
        expect(() => mount(createConsumer(testContext, 'useCustomHook', 'CustomProvider'))).toThrow('useCustomHook must be used within a CustomProviderProvider');
        restoreConsole();
    });
});
