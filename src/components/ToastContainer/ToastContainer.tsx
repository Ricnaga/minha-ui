import { createPortal } from "react-dom";
import { Toast } from "./_components/Toast";
import {
  ToastContainerContext,
  useToastContainerProvider,
} from "./useToastContainer";
import type { ToastContainerProps } from "./toast-container.types";

export function ToastContainer(props: ToastContainerProps) {
  const { children, toasts, positions, ...rest } =
    useToastContainerProvider(props);

  return (
    <ToastContainerContext.Provider value={rest}>
      {children}

      {typeof window !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-50 pointer-events-none">
            {Object.entries(positions).map(([position, classes]) => (
              <div
                key={position}
                className={`absolute flex flex-col gap-2 ${classes}`}
              >
                {toasts
                  .filter((t) => t.position === position)
                  .map((toast) => (
                    <Toast
                      key={toast.id}
                      variant={toast.variant}
                      position={toast.position}
                      state={toast.state}
                    >
                      {toast.message}
                    </Toast>
                  ))}
              </div>
            ))}
          </div>,
          document.body
        )}
    </ToastContainerContext.Provider>
  );
}
