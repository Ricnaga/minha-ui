import { usePopover } from '../Popover/usePopover';
export function usePopoverTrigger(props) {
    const { onPopoverChange } = usePopover();
    return { children: props.children, onPopoverChange };
}
