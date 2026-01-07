import type {
  DrawerFooterProps,
  UseDrawerFooterProps,
} from "./drawer-footer.types";
import { drawerFooter } from "@/theme";

export function useDrawerFooter(props: UseDrawerFooterProps) {
  const { align = "end", padding = "md", border = "none", ...rest } = props;

  const drawerFooterProps: DrawerFooterProps = {
    ...rest,
    className: drawerFooter({ align, border, padding }),
  };

  return { drawerFooterProps };
}
