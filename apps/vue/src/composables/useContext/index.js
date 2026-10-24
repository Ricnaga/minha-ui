import { inject } from 'vue';
export function useContext({ context, hookName, providerName, }) {
    const data = inject(context);
    if (data === undefined) {
        throw new Error(`${hookName} must be used within a ${providerName}Provider`);
    }
    return data;
}
