import { renderHook } from '@testing-library/react';
import { createContext, type ReactNode, type Context } from 'react';
import { useContext } from '../..';

const TestContext = createContext<string>('default');

type UseContextParams<T> = Parameters<typeof useContext<T>>[0];

describe('useContext', () => {
  it('should return context value when used within provider', () => {
    const wrapper = ({ children }: { children: ReactNode }) => (
      <TestContext.Provider value="test-value">{children}</TestContext.Provider>
    );

    const params: UseContextParams<string> = {
      context: TestContext,
      hookName: 'useTest',
      providerName: 'Test',
    };

    const { result } = renderHook(() => useContext(params), { wrapper });

    expect(result.current).toBe('test-value');
  });

  it('should throw error when used outside provider', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const TestContextNoDefault = createContext<string>(
      undefined as unknown as string,
    );

    const params: UseContextParams<string> = {
      context: TestContextNoDefault as unknown as Context<string>,
      hookName: 'useTest',
      providerName: 'Test',
    };

    expect(() => {
      renderHook(() => useContext(params));
    }).toThrow('useTest must be used within a TestProvider');

    errorSpy.mockRestore();
  });

  it('should use custom hook and provider names in error message', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const TestContextNoDefault = createContext<string>(
      undefined as unknown as string,
    );

    const params: UseContextParams<string> = {
      context: TestContextNoDefault as unknown as Context<string>,
      hookName: 'useCustomHook',
      providerName: 'CustomProvider',
    };

    expect(() => {
      renderHook(() => useContext(params));
    }).toThrow('useCustomHook must be used within a CustomProviderProvider');

    errorSpy.mockRestore();
  });
});
