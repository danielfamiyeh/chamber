import { StyleSheet } from 'react-native';
import ThemeManager from '../../../../../utils/ui/ThemeManger';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';

const searchResultsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  noResultsPrompt: {
    color: 'grey',
    fontSize: scaleX(18),
    marginBottom: scaleY(6),
    alignSelf: 'center',
    textAlign: 'center',
  },
  searchAgainButton: {
    alignSelf: 'center',
    marginTop: scaleY(6),
    borderRadius: scaleX(4),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(24),
    backgroundColor: ThemeManager.theme.info,
  },

  searchAgainButtonText: {
    color: 'white',
  },

  searchResultsContainer: {
    flex: 1,
  },
});

export default searchResultsStyles;
