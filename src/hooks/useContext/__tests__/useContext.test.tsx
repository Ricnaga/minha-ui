import { renderHook } from '@testing-library/react';
import { createContext, type ReactNode } from 'react';
import { useContext } from '../..';

const TestContext = createContext<string | undefined>(undefined);

describe('useContext', () => {
  it('should return context value when used within provider', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <TestContext.Provider value="test-value">{children}</TestContext.Provider>
    );

    const { result } = renderHook(
      () =>
        useContext({
          context: TestContext as any,
          hookName: 'useTest',
          providerName: 'Test',
        }),
      { wrapper },
    );

    expect(result.current).toBe('test-value');
  });

  it('should throw error when used outside provider', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      renderHook(() =>
        useContext({
          context: TestContext as any,
          hookName: 'useTest',
          providerName: 'Test',
        }),
      );
    }).toThrow('useTest must be used within a TestProvider');

    errorSpy.mockRestore();
  });

  it('should use custom hook and provider names in error message', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      renderHook(() =>
        useContext({
          context: TestContext as any,
          hookName: 'useCustomHook',
          providerName: 'CustomProvider',
        }),
      );
    }).toThrow('useCustomHook must be used within a CustomProviderProvider');

    errorSpy.mockRestore();
  });
});
