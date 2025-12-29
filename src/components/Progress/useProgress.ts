import { useEffect } from "react";
import { progress, progressSheet } from "@/theme";
import type { ProgressProps, UseProgressProps } from "./progress.types";

export function useProgress(props: UseProgressProps) {
  useEffect(() => {
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      progressSheet,
    ];
  }, []);

  const progressProps: ProgressProps = {
    ...props,
    className: progress(),
  };

  return { progressProps };
}
