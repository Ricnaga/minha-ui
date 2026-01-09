import { useEffect, type HTMLAttributes } from "react";
import { progress, progressSheet } from "@/theme";
import type { ProgressProps, UseProgressProps } from "./progress.types";
import { formatToPercentage } from "src/utils/number";
import type { DataTestidProps } from "@/types";

const { core, wrapper } = progress();

export function useProgress(props: UseProgressProps) {
  const {
    size = "md",
    color = "primary",
    animated = true,
    value = 25,
    ...rest
  } = props;

  const valuePercentage = formatToPercentage({ value: value / 100 });

  useEffect(() => {
    if ("adoptedStyleSheets" in document) {
      if (!document.adoptedStyleSheets.includes(progressSheet)) {
        document.adoptedStyleSheets = [
          ...document.adoptedStyleSheets,
          progressSheet,
        ];
      }
    }
  }, []);

  const wrapperProps: DataTestidProps & HTMLAttributes<HTMLDivElement> = {
    "data-testid": "progress-wrapper",
    className: wrapper({ animated, color, size }),
  };

  const coreProps: ProgressProps = {
    ...rest,
    "data-testid": "progress-core",
    style: { width: valuePercentage },
    className: core({ animated, color, size }),
  };

  return { coreProps, wrapperProps };
}
