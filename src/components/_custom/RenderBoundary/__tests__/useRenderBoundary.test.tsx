import { renderHook } from '@testing-library/react';
import { useRenderBoundary } from '../useRenderBoundary';

describe('useRenderBoundary', () => {
  it('should return loadingProps from props', () => {
    const props = {
      loadingProps: { fallback: <div>Loading</div> },
    };

    const { result } = renderHook(() => useRenderBoundary(props));

    expect(result.current.loadingProps).toEqual(props.loadingProps);
  });

  it('should return errorProps from props', () => {
    const props = {
      errorProps: { fallbackRender: () => <div>Error</div> },
    };

    const { result } = renderHook(() => useRenderBoundary(props));

    expect(result.current.errorProps).toEqual(props.errorProps);
  });

  it('should return children from props', () => {
    const children = <div>Children</div>;
    const props = { children };

    const { result } = renderHook(() => useRenderBoundary(props));

    expect(result.current.children).toEqual(children);
  });

  it('should return empty props when none provided', () => {
    const { result } = renderHook(() => useRenderBoundary({}));

    expect(result.current.loadingProps).toBeUndefined();
    expect(result.current.errorProps).toBeUndefined();
    expect(result.current.children).toBeUndefined();
  });

  it('should spread props to renderBoundaryProps', () => {
    const props = {
      loadingProps: { fallback: <div>Loading</div> },
      errorProps: { fallbackRender: () => <div>Error</div> },
      children: <div>Children</div>,
    };

    const { result } = renderHook(() => useRenderBoundary(props));

    expect(result.current.renderBoundaryProps).toEqual(props);
  });
});
