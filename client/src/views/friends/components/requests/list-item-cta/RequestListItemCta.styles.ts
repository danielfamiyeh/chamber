import { StyleSheet } from 'react-native';

const requestListItemCtatyles = StyleSheet.create({
  container: {
    flex: 0.2,
    borderLeftWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgrey',
    justifyContent: 'space-evenly',
  },

  button: {
    borderWidth: 0,
  },
});

export const iconStyleProps = {
  size: 24,
};

export default requestListItemCtatyles;
