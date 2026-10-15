import { WarningCircleIcon } from '@phosphor-icons/react';
import type { ErrorStateProps } from './error-state.types';
import { useErrorState } from './useErrorState';

const DefaultImage = <WarningCircleIcon size={48} aria-hidden="true" />;

export function ErrorState(props: ErrorStateProps) {
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
  } = useErrorState(props);

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
