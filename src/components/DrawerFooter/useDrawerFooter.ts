import type { 
  DrawerFooterProps,  
  UseDrawerFooterProps 
} from "./drawer-footer.types";
import { drawerFooter } from "../../theme";

export function useDrawerFooter(props: UseDrawerFooterProps) {
  
  // TODO: Implement hook logic
  const drawerFooterProps: DrawerFooterProps = {
    ...props,
    className: drawerFooter(),
  };

  return { drawerFooterProps };
}
