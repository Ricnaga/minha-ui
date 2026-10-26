import { mount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import { useLocalStorage } from '..';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('useLocalStorage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.clear();
  });

  it('should set value with create', () => {
    const Comp = defineComponent({
      setup() {
        const { create, value } = useLocalStorage('test-key', 'default');
        return () => h('button', { onClick: () => create('new-value') }, value.value as string);
      },
    });
    const wrapper = mount(Comp);
    wrapper.find('button').trigger('click');
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });
});
