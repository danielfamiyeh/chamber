import { StyleSheet } from 'react-native';
import { scaleX, scaleY } from '../../../../../utils/methods/scaleable-units';
import ThemeManager from '../../../../../utils/ui/ThemeManger';

const searchResultsStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
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

  searchButton: {
    alignSelf: 'center',
    marginTop: scaleY(10),
    borderRadius: scaleX(4),
    paddingVertical: scaleY(8),
    paddingHorizontal: scaleX(24),
    backgroundColor: ThemeManager.theme.info,
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
});

export default searchResultsStyles;
