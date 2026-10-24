import { computed } from 'vue';
import { accordion } from '@/theme';
import { useAccordion } from '../Accordion/useAccordion';
import { useAccordionItem } from '../AccordionItem/useAccordionItem';
export function useAccordionHeader(props) {
    const { accordionHeader } = accordion();
    const { value: itemValue, isOpen, variant } = useAccordionItem();
    const { handleToggle } = useAccordion();
    const accordionHeaderProps = computed(() => ({
        ...props,
        'aria-expanded': isOpen,
        onClick: () => handleToggle(itemValue),
        class: accordionHeader({ variant, class: props.class }),
    }));
    return { accordionHeaderProps };
}
