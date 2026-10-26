import { render } from '@testing-library/svelte';
import { flushSync } from 'svelte';
import Test from './Test.svelte';

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

  it('should return initial value when key does not exist', () => {
    const { getByTestId } = render(Test);
    expect(getByTestId('value').textContent).toBe('default');
  });

  it('should set value with create', () => {
    const { getByTestId } = render(Test);
    const create = getByTestId('create');
    create.click();
    flushSync();
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  it('should remove value with remove', () => {
    const { getByTestId } = render(Test);
    const remove = getByTestId('remove');
    remove.click();
    flushSync();
    expect(localStorageMock.removeItem).toHaveBeenCalled();
  });

  it('should clear all values with clear', () => {
    const { getByTestId } = render(Test);
    const clear = getByTestId('clear');
    clear.click();
    flushSync();
    expect(localStorageMock.clear).toHaveBeenCalled();
  });
});
