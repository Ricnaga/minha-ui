import { useEffect } from "react";
import type { SpinnerProps, UseSpinnerProps } from "./spinner.types";
import { spinner, spinnerSheet } from "@/theme";

const { icon } = spinner();

export function useSpinner(props: UseSpinnerProps) {
  const { className, color = "primary", thickness = "md", ...rest } = props;

  useEffect(() => {
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      spinnerSheet,
    ];
  }, []);

  const svgProps: SpinnerProps = {
    ...rest,
    viewBox: "25 25 50 50",
    className: icon({ className, color, thickness }),
  };

  return { svgProps };
}
