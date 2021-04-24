import { StyleSheet } from 'react-native';
import { theme } from '../../assets/styles/theme';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
  getWidthWithScaleFactor
} from '../../utils/helpers/LayoutHelper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getHeightWithScaleFactor(10)
    
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: getFontWithScaleFactor(17),
    marginRight: getWidthWithScaleFactor(4)
  },
  distance: {
    fontSize: getFontWithScaleFactor(13)
  },
  numberContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
    
  },
  number: {
    paddingHorizontal: getWidthWithScaleFactor(16),
    paddingVertical: getHeightWithScaleFactor(8),
    borderRadius: getWidthWithScaleFactor(16),
    backgroundColor: theme.colors.green
  },
  numberText: {
    fontSize: getFontWithScaleFactor(15),
    color: '#fff'
  }
});