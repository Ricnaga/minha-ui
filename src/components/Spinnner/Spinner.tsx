import { spinner } from "../../theme";
import type { SpinnerProps } from "./spinner.types";
import { useSpinner } from "./useSpinner";

const { container, wrapper } = spinner();

export function Spinner(props: SpinnerProps) {
  const { svgProps } = useSpinner(props);

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <svg {...svgProps}>
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </div>
  );
}
