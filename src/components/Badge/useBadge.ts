import { badge } from "@/theme";
import { type BadgeProps, type UseBadgeProps } from "./badge.types";

export function useBadge(props: UseBadgeProps) {
  const {
    className,
    color = "primary",
    size = "medium",
    position = "topRight",
    value = 0,
    children,
    ...rest
  } = props;

  const badgeProps: BadgeProps = {
    ...rest,
    className: badge({ color, size, position, className }),
  };

  return { badgeProps, value, children };
}
