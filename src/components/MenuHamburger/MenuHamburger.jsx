import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './MenuHamburger.styles';
import { theme } from '../../assets/styles/theme';

export const MenuHamburger = () => (
    <View style={styles.container}>
        <View style={[styles.line, { backgroundColor: theme.colors.green }]} ><Text> </Text></View>
        <View style={[styles.line, { backgroundColor: theme.colors.grey }]} ><Text> </Text></View>
        <View style={[styles.line, { backgroundColor: theme.colors.green }]} ><Text> </Text></View>
    </View>
);