import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';
import { AcccountActionProps } from './AccountAction';

const accountActionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: scaleX(12),
    paddingVertical: scaleY(10),
    borderRadius: scaleX(4),
  },
  left: {},
  leftText: {},
  right: {},
});

export const getComputedStyles = (props: AccountActionProps) => {
  const notFirst = props.index;
  const notLast = props.index < props.numActions - 1;

  const computedStyles = {
    container: {
      borderTopWidth: notFirst ? 0 : 1,
      borderTopRightRadius: notFirst ? 0 : 8,
      borderTopLeftRadius: notFirst ? 0 : 8,
      borderBottomRightRadius: notLast ? 0 : 8,
      borderBottomLeftRadius: notLast ? 0 : 8,
    },
  };

  return computedStyles;
};

export default accountActionStyles;
