import {
  type TabsPanelsProps,
  type UseTabsPanelsProps,
} from "./tabs-panels.types";

export function useTabsPanels(props: UseTabsPanelsProps) {
  const tabsPanelsProps: TabsPanelsProps = {
    ...props,
  };

  return { tabsPanelsProps };
}
