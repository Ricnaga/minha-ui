import { createContext, useId } from 'react';
import { useContext } from '@/hooks';
import type {
  DrawerContextProps,
  UseDrawerProviderProps,
} from './drawer.types';

export const DrawerContext = createContext<DrawerContextProps>(
  {} as DrawerContextProps,
);

export function useDrawerProvider(props: UseDrawerProviderProps) {
  const reactId = useId();

  const {
    children,
    isOpen = false,
    side = 'right',
    titleId = reactId,
    ariaLabel = 'Drawer',
    ...rest
  } = props;

  return { children, isOpen, side, titleId, ariaLabel, ...rest };
}

export function useDrawer() {
  return useContext({
    context: DrawerContext,
    hookName: useDrawer.name,
    providerName: DrawerContext.name,
  });
}
