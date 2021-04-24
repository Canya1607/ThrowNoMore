import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Shop.styles';

export const Shop = ({id, name, distance, numberOfOffers}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.distance}>{distance}</Text>
        <View style={styles.numberContainer}>
          <View style={styles.number}>
            <Text style={styles.numberText}>{numberOfOffers}</Text>
          </View>
        </View>
    </View>
  )
}