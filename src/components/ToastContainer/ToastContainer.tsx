import { type PropsWithChildren } from "react";
import { Toast } from "./Toast";
import { ToastContext, useToastProvider } from "./useToast";

export function ToastContainer({ children }: PropsWithChildren) {
  const { show, toasts } = useToastProvider();

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div className="fixed top-4 right-4 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            position={toast.position}
          >
            {toast.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
