import { Toast } from "./_components/Toast";
import type { ToastContainerProps } from "./toast-container.types";
import {
  ToastContainerContext,
  useToastContainerProvider,
} from "./useToastContainer";

export function ToastContainer(props: ToastContainerProps) {
  const { children, toasts, ...rest } = useToastContainerProvider(props);

  return (
    <ToastContainerContext.Provider value={rest}>
      {children}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
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
    </ToastContainerContext.Provider>
  );
}
