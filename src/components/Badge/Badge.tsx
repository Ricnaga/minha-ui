import type { BadgeProps } from "./badge.types";
import { useBadge } from "./useBadge";

export function Badge(props: BadgeProps) {
  const { badgeProps, children, value } = useBadge(props);

  return (
    <div className="relative inline-block">
      {children}
      {!!value && <div {...badgeProps}>{value}</div>}
    </div>
  );
}
