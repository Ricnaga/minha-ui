import { Activity } from "react";
import { createPortal } from "react-dom";
import { Spinner } from "../Spinner";
import type { BackdropProps } from "./backdrop.types";
import { useBackdrop } from "./useBackdrop";

export function Backdrop(props: BackdropProps) {
  const { children, backdropProps, mode, wrapperProps } = useBackdrop(props);

  const backdropChildren = children ?? (
    <Activity mode={mode}>
      <div {...wrapperProps}>
        <Spinner />
      </div>
    </Activity>
  );

  const backdropContent = <div {...backdropProps}>{backdropChildren}</div>;

  return createPortal(backdropContent, document.body);
}
