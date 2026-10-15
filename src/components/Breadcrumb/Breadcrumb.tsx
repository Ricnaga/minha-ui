import type { BreadcrumbProps } from './breadcrumb.types';
import { BreadcrumbContext, useBreadcrumbProvider } from './useBreadcrumb';

export function Breadcrumb(props: BreadcrumbProps) {
  const { children, breadcrumbProps, ...context } =
    useBreadcrumbProvider(props);

  return (
    <nav {...breadcrumbProps}>
      <BreadcrumbContext.Provider value={context}>
        {children}
      </BreadcrumbContext.Provider>
    </nav>
  );
}
