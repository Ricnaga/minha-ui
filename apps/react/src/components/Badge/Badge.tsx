import { badgeWrapper } from '@/theme';

import type { BadgeProps } from './badge.types';
import { useBadge } from './useBadge';

export function Badge(props: BadgeProps) {
  const { badgeProps, children, value } = useBadge(props);

  return (
    <div className={badgeWrapper()}>
      {children}
      {!!value && <div {...badgeProps}>{value}</div>}
    </div>
  );
}
