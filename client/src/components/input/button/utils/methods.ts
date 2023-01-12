import { ButtonProps } from '../../../../../types';

export const getComputedStyles = (props: ButtonProps, onPressIn: boolean) => {
  const computedStyles = {
    button: {
      opacity: +!onPressIn + 0.5,
      borderWidth: props.noBorder ? 0 : 1,
    },
    text: {
      color: props.colorVariant === 'light' ? 'black' : 'white',
    },
  };

  if (props.disabled) {
    computedStyles.button.opacity = 0.5;
  }

  return computedStyles;
};
