import { input } from '@/theme';

const {
  container,
  startIconWrapper,
  endIconWrapper,
  field,
  title,
  inputWrapper,
} = input();

export function useInput(getProps: () => Record<string, unknown>) {
  const getVariant = () =>
    (getProps().variant as 'outline' | 'underline') ?? 'outline';
  const getId = () => (getProps().id as string) ?? 'input-fixed-id';
  const getHasStartIcon = () => !!getProps().startIcon;
  const getHasEndIcon = () => !!getProps().endIcon;

  return {
    get containerProps() {
      const props = getProps();
      return {
        class: container({
          class: props.class as string | undefined,
          variant: getVariant(),
        }),
      };
    },
    get startIconProps() {
      return {
        'data-testid': 'input-start-icon',
        class: startIconWrapper({ variant: getVariant() }),
      };
    },
    get endIconProps() {
      return {
        'data-testid': 'input-end-icon',
        class: endIconWrapper({ variant: getVariant() }),
      };
    },
    get inputWrapperProps() {
      return { class: inputWrapper({ variant: getVariant() }) };
    },
    get inputProps() {
      const props = getProps();
      return {
        id: getId(),
        type: (props.type as string) ?? 'text',
        placeholder: ' ',
        class: field({
          variant: getVariant(),
          endIcon: getHasEndIcon(),
          startIcon: getHasStartIcon(),
        }),
      };
    },
    get labelProps() {
      return {
        for: getId(),
        class: title({ variant: getVariant(), startIcon: getHasStartIcon() }),
      };
    },
    get hasStartIcon() {
      return getHasStartIcon();
    },
    get hasEndIcon() {
      return getHasEndIcon();
    },
    get id() {
      return getId();
    },
  };
}
