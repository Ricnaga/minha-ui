import { useSelectContext } from '../../../SelectProvider/useSelectProvider';

export function useSelectItem() {
  const { options, handleSelectChange, selectedOptions } = useSelectContext();

  function handleChangeItem(option: any) {
    handleSelectChange(option);
  }

  function handleSelectedItem(option: any) {
    return (selectedOptions as Map<string, any>).has(option.key.toString());
  }

  return {
    options,
    handleChangeItem,
    handleSelectedItem,
  };
}
