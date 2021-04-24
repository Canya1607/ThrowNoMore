import { StyleSheet } from 'react-native';
import { theme } from '../../assets/styles/theme';
import {
  getWidthWithScaleFactor,
  getHeightWithScaleFactor,
  getFontWithScaleFactor
} from '../../utils/helpers/LayoutHelper';

export const styles = StyleSheet.create({
  mainContainer: {
    width: getWidthWithScaleFactor(375),
    backgroundColor: '#fff',
    paddingHorizontal: getWidthWithScaleFactor(20),
    paddingTop: getHeightWithScaleFactor(20),
    paddingBottom: getHeightWithScaleFactor(12),
    borderBottomLeftRadius: getHeightWithScaleFactor(25),
    borderBottomRightRadius: getHeightWithScaleFactor(25),
    marginBottom: getHeightWithScaleFactor(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  activeContainer: {
    width: getWidthWithScaleFactor(150),
    paddingVertical: getHeightWithScaleFactor(8),
    borderRadius: getHeightWithScaleFactor(16),
    backgroundColor: theme.colors.green,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inActiveContainer: {
    width: getWidthWithScaleFactor(150),
    paddingVertical: getHeightWithScaleFactor(8),
    borderRadius: getHeightWithScaleFactor(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeText: {
    fontSize: getFontWithScaleFactor(14),
    color: '#fff'
  },
  inActiveText: {
    fontSize: getFontWithScaleFactor(14),
  }
});