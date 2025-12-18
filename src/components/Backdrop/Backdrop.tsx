import { Activity } from "react";
import { createPortal } from "react-dom";
import { Spinner } from "../Spinner";
import type { BackdropProps } from "./backdrop.types";
import { useBackdrop } from "./useBackdrop";

export function Backdrop(props: BackdropProps) {
  const { backdropProps, mode, wrapperProps } = useBackdrop(props);

  const backdropContent = (
    <div {...backdropProps}>
      <Activity mode={mode}>
        <div {...wrapperProps}>
          <Spinner />
        </div>
      </Activity>
    </div>
  );

  return createPortal(backdropContent, document.body);
}
