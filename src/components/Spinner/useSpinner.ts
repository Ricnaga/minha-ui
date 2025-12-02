import { useEffect } from "react";
import type { SpinnerProps, UseSpinnerProps } from "./spinner.types";
import { spinner, spinnerSheet } from "../../theme";

const { icon } = spinner();

export function useSpinner(props: UseSpinnerProps) {
  useEffect(() => {
    document.adoptedStyleSheets = [
      ...document.adoptedStyleSheets,
      spinnerSheet,
    ];
  }, []);

  const svgProps: SpinnerProps = {
    ...props,
    viewBox: "25 25 50 50",
    className: icon(),
  };

  return { svgProps };
}
