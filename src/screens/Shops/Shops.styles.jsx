import { StyleSheet } from 'react-native';
import {
  getWidthWithScaleFactor
} from '../../utils/helpers/LayoutHelper';

export const styles = StyleSheet.create({
  listContainer: {
    width: getWidthWithScaleFactor(375),
    paddingLeft: getWidthWithScaleFactor(70),
    paddingRight: getWidthWithScaleFactor(20),
  }
});