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
  quantityContainer: {
    height: getHeightWithScaleFactor(30),
    width: getHeightWithScaleFactor(30),
    borderRadius: getHeightWithScaleFactor(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.green
  },
  quantityText: {
    fontSize: getFontWithScaleFactor(13),
    color: '#fff'
  },
  name: {
    marginLeft: getWidthWithScaleFactor(40),
    fontSize: getFontWithScaleFactor(17),
    marginRight: getWidthWithScaleFactor(4)
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  priceText: {
    fontSize: getFontWithScaleFactor(18),
    fontWeight: '500'
  }
});