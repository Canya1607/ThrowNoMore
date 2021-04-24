import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Offer.styles';

export const Offer = ({ id, name, price, quantity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  )
}