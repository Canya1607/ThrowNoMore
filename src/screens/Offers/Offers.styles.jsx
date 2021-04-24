import { StyleSheet } from 'react-native';
import { getFontWithScaleFactor, getWidthWithScaleFactor } from '../../utils/helpers/LayoutHelper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  listContainer: {
    width: getWidthWithScaleFactor(375),
    paddingLeft: getWidthWithScaleFactor(20),
    paddingRight: getWidthWithScaleFactor(15)
  },
  emptyText: {
    fontSize: getFontWithScaleFactor(18),
    fontWeight: '500'
  }
});
