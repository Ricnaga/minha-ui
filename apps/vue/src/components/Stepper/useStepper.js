export function useStepper(props) {
    const { orientation = 'horizontal', isClickable = true, ...rest } = props;
    const stepperProps = {
        orientation,
        isClickable,
        ...rest,
    };
    return { stepperProps };
}
