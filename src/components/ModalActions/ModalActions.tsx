import { Button } from "../Button";
import type { ModalActionsProps } from "./modal-actions.types";
import { useModalActions } from "./useModalActions";

export function ModalActions(props: ModalActionsProps) {
  const { modalActionsProps, onClose } = useModalActions(props);

  return (
    <div {...modalActionsProps}>
      <Button color="error" variant="outline" onClick={onClose}>
        Cancelar
      </Button>
      <Button type="submit" color="success">
        Confirmar
      </Button>
    </div>
  );
}
