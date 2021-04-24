import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './ShopTopBar.styles';

export const ShopTopBar = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.activeContainer}>
          <Text style={styles.activeText}>All</Text>
        </View>
        <View style={styles.inActiveContainer}>
          <Text style={styles.inActiveText}>My favourites</Text>
        </View>
      </View>
    </View>
  );
};