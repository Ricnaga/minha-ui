import type {
  ModalFooterProps,
  UseModalFooterProps,
} from "./modal-footer.types";
import { modalFooter } from "@/theme";

export function useModalFooter(props: UseModalFooterProps) {
  const { padding = "md", align = "right", ...rest } = props;
  const modalFooterProps: ModalFooterProps = {
    ...rest,
    className: modalFooter({ align, padding }),
  };

  return { modalFooterProps };
}
