import { TrayIcon } from '@phosphor-icons/react';
import type { EmptyStateProps } from './empty-state.types';
import { useEmptyState } from './useEmptyState';

const DefaultImage = <TrayIcon size={48} aria-hidden="true" />;

export function EmptyState(props: EmptyStateProps) {
  const {
    rootProps,
    imageProps,
    titleProps,
    messageProps,
    actionProps,
    image,
    title,
    message,
    action,
  } = useEmptyState(props);

  const imageContent = image === undefined ? DefaultImage : image;

  return (
    <div {...rootProps}>
      {imageContent != null && <div {...imageProps}>{imageContent}</div>}
      {title != null && <p {...titleProps}>{title}</p>}
      {message != null && <p {...messageProps}>{message}</p>}
      {action != null && <div {...actionProps}>{action}</div>}
    </div>
  );
}
