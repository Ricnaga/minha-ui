import type { RequiredChildren } from "../../types";
import { useTabsList } from "./useTabsList";

// Lista de triggers
export function TabsList(props: RequiredChildren) {
  const { tabsListProps } = useTabsList(props);
  return <div {...tabsListProps} />;
}
