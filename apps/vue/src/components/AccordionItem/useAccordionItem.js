import { inject, provide } from 'vue';
export const AccordionItemContextKey = Symbol('AccordionItemContext');
export function useAccordionItemProvider(props) {
    return { children: props.children, value: props.value };
}
export function useAccordionItem() {
    const context = inject(AccordionItemContextKey);
    if (!context) {
        throw new Error('useAccordionItem must be used within a AccordionItemProvider');
    }
    return context;
}
export function provideAccordionItem(context) {
    provide(AccordionItemContextKey, context);
}
