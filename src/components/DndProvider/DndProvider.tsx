import type { DndProviderProps } from "./dnd-provider.types";
import { DndProviderContext, useDndProvider } from "./useDndProvider";

export function DndProvider(props: DndProviderProps) {
  const { children, ...rest } = useDndProvider(props);

  return (
    <DndProviderContext.Provider value={rest}>
      {children}
    </DndProviderContext.Provider>
  );
}
