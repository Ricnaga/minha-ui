import { useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { tabs } from '@/theme';
import { useTabs } from '../Tabs/useTabs';
import type { TabsListProps, UseTabsListProps } from './tabs-list.types';

const { wrapper } = tabs();

export function useTabsList(props: UseTabsListProps) {
  const { variant } = useTabs();
  const listRef = useRef<HTMLDivElement | null>(null);

  function getTabs(): HTMLElement[] {
    const list = listRef.current;
    if (!list) return [];

    return Array.from(
      list.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])'),
    );
  }

  function moveFocus(nextIndex: number) {
    const items = getTabs();
    if (items.length === 0) return;

    const normalizedIndex = (nextIndex + items.length) % items.length;
    items[normalizedIndex]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const items = getTabs();
    const currentIndex = items.indexOf(document.activeElement as HTMLElement);
    if (currentIndex === -1) return;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        moveFocus(currentIndex + 1);
        return;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        moveFocus(currentIndex - 1);
        return;
      case 'Home':
        event.preventDefault();
        moveFocus(0);
        return;
      case 'End':
        event.preventDefault();
        moveFocus(items.length - 1);
        return;
      default:
        return;
    }
  }

  const tabsListProps: TabsListProps = {
    ...props,
    ref: listRef,
    role: 'tablist',
    onKeyDown: handleKeyDown,
    className: wrapper({ variant }),
  };
  return { tabsListProps };
}
