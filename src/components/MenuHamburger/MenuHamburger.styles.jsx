import { StyleSheet, Platform } from 'react-native';
import {
    getWidthWithScaleFactor,
    getHeightWithScaleFactor
  } from '../../utils/helpers/LayoutHelper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        marginVertical: getHeightWithScaleFactor(
            Platform.OS === 'ios' ? 7 : 15
        ),
        marginRight: getWidthWithScaleFactor(10)
    },
    line: {
        flexDirection: 'row',
        height: getHeightWithScaleFactor(5),
        width: getWidthWithScaleFactor(35),
        borderRadius: getHeightWithScaleFactor(2)
    }
});