import { renderHook } from '@testing-library/react';
import { useDataBoundary } from '../useDataBoundary';

describe('useDataBoundary', () => {
  describe('isLoading state', () => {
    it('should return children when data is provided and isLoading is false (default)', () => {
      const { result } = renderHook(() =>
        useDataBoundary({ data: 'test', children: 'children content' }),
      );

      expect(result.current.renderContent()).toBe('children content');
    });

    it('should return loading fallback when isLoading is true', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          loadingProps: { isLoading: true },
        }),
      );

      const content = result.current.renderContent();
      expect(content).toHaveProperty('type', 'div');
      expect(content).toHaveProperty('props');
      expect(result.current.renderContent()).toHaveProperty(
        'props.children',
        'carregando...',
      );
    });

    it('should return custom loading fallback when provided', () => {
      const customFallback = <div>Custom loading</div>;

      const { result } = renderHook(() =>
        useDataBoundary({
          loadingProps: {
            isLoading: true,
            fallback: customFallback,
          },
        }),
      );

      expect(result.current.renderContent()).toEqual(customFallback);
    });
  });

  describe('isError state', () => {
    it('should return error fallback when isError is true', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          errorProps: { isError: true },
        }),
      );

      expect(result.current.renderContent()).toHaveProperty('type', 'div');
      expect(result.current.renderContent()).toHaveProperty(
        'props.children',
        'ocorreu um erro!',
      );
    });

    it('should return custom error fallback when provided', () => {
      const customFallback = <div>Custom error</div>;

      const { result } = renderHook(() =>
        useDataBoundary({
          errorProps: {
            isError: true,
            fallback: customFallback,
          },
        }),
      );

      expect(result.current.renderContent()).toEqual(customFallback);
    });

    it('should show error over loading when both are true', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          loadingProps: { isLoading: true },
          errorProps: { isError: true },
        }),
      );

      expect(result.current.renderContent()).toHaveProperty(
        'props.children',
        'ocorreu um erro!',
      );
    });
  });

  describe('data rendering', () => {
    it('should return null when no data and no loading/error', () => {
      const { result } = renderHook(() => useDataBoundary({}));

      expect(result.current.renderContent()).toBeNull();
    });

    it('should return children when data is provided', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          data: 'test-data',
          children: 'children content',
        }),
      );

      expect(result.current.renderContent()).toBe('children content');
    });

    it('should call children function with data when children is a function', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          data: { name: 'John' },
          children: ({ data }) => <div>{data.name}</div>,
        }),
      );

      expect(result.current.renderContent()).toHaveProperty('type', 'div');
      expect(result.current.renderContent()).toHaveProperty(
        'props.children',
        'John',
      );
    });

    it('should return null when data is null', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          data: null,
          children: 'content',
        }),
      );

      expect(result.current.renderContent()).toBeNull();
    });

    it('should return null when data is undefined', () => {
      const { result } = renderHook(() =>
        useDataBoundary({
          data: undefined,
          children: 'content',
        }),
      );

      expect(result.current.renderContent()).toBeNull();
    });
  });

  describe('dataBoundaryProps', () => {
    it('should spread all props to dataBoundaryProps', () => {
      const props = {
        data: 'test',
        loadingProps: { isLoading: false },
        errorProps: { isError: false },
      };

      const { result } = renderHook(() => useDataBoundary(props));

      expect(result.current.dataBoundaryProps).toEqual(props);
    });
  });
});
