import { ButtonProps } from '../../../../../types';

export const getComputedStyles = (props: ButtonProps, onPressIn: boolean) => ({
  button: {
    opacity: +!onPressIn + 0.5,
    borderWidth: props.noBorder ? 0 : 1,
  },
  text: {
    color: props.colorVariant === 'light' ? 'black' : 'white',
  },
});
