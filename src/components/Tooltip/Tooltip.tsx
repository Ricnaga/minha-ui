import type { TooltipProps } from "./tooltip.types";
import { useTooltip } from "./useTooltip";

export function Tooltip(props: TooltipProps) {
  const { wrapperProps, children, tooltipProps } = useTooltip(props);

  return (
    <div {...wrapperProps}>
      {children}
      <div {...tooltipProps} />
    </div>
  );
}
