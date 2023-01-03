import { ButtonProps } from '../../../../../types';

export const getComputedStyles = (props: ButtonProps, onPressIn: boolean) => ({
  button: {
    opacity: +!onPressIn + 0.5,
  },
  text: {
    color: props.colorVariant === 'light' ? 'black' : 'white',
  },
});
