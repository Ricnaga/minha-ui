import { useSelectContext } from '../../../SelectProvider/useSelectProvider';
export function useSelectItem() {
    const { options, handleSelectChange, selectedOptions } = useSelectContext();
    function handleChangeItem(option) {
        handleSelectChange(option);
    }
    function handleSelectedItem(option) {
        return selectedOptions.has(option.key.toString());
    }
    return {
        options,
        handleChangeItem,
        handleSelectedItem,
    };
}
