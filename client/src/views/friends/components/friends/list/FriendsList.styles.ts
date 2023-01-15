import { StyleSheet } from 'react-native';
import ThemeManager from '../../../../../utils/ui/ThemeManger';
import { scaleY, scaleX } from '../../../../../utils/methods/scaleable-units';

const friendsListStyles = StyleSheet.create({
  container: { flex: 1 },
  listEmptyIcon: {
    color: 'grey',
    alignSelf: 'center',
    marginBottom: scaleY(16),
  },
  listEmptyContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    paddingBottom: scaleY(32),
    paddingHorizontal: scaleX(8),
  },
  listEmptyText: {
    color: 'grey',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: scaleX(18),
  },
  searchButton: {
    alignSelf: 'center',
    marginTop: scaleY(10),
    borderRadius: scaleX(4),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(24),
    backgroundColor: ThemeManager.theme.info,
  },
  searchButtonText: {
    color: 'white',
  },
  contentContainer: { flex: 1 },
});

export default friendsListStyles;
