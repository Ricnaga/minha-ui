import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../..';

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
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    expect(result.current.value).toBe('default');
  });

  it('should return stored value', () => {
    localStorageMock.setItem('test-key', JSON.stringify('stored-value'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    expect(result.current.value).toBe('stored-value');
  });

  it('should set value with create', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    act(() => {
      result.current.create('new-value');
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'test-key',
      JSON.stringify('new-value'),
    );
  });

  it('should remove value with remove', () => {
    localStorageMock.setItem('test-key', JSON.stringify('value'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    act(() => {
      result.current.remove();
    });

    expect(localStorageMock.removeItem).toHaveBeenCalledWith('test-key');
  });

  it('should clear all values with clear', () => {
    localStorageMock.setItem('key1', JSON.stringify('value1'));
    localStorageMock.setItem('key2', JSON.stringify('value2'));

    const { result } = renderHook(() => useLocalStorage('test-key', 'default'));

    act(() => {
      result.current.clear();
    });

    expect(localStorageMock.clear).toHaveBeenCalled();
  });
});
