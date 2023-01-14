import { StyleSheet } from 'react-native';

const requestListItemStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justiftyContent: 'space-between',
  },
  metaContainer: {
    flex: 0.8,
    borderWidth: 1,
  },
  ctaContainer: {
    flex: 0.2,
    borderWidth: 1,
  },
});

export default requestListItemStyles;
