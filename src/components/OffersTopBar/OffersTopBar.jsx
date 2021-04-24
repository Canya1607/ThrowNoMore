import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './OffersTopBar.styles';

// Images
import LeftArrowPng from '../../assets/images/left-arrow.png'
import HeartPng from '../../assets/images/heart.png'

export const OffersTopBar = ({onBackPress}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPress}>
          <Image style={styles.heartImage} source={LeftArrowPng} resizeMode="contain" />
        </TouchableOpacity>
        <View style={styles.activeContainer}>
          <Text style={styles.activeText}>Offers</Text>
        </View>
        <View style={styles.inActiveContainer}>
          <Text style={styles.inActiveText}>Details</Text>
        </View>
        <Image style={styles.heartImage} source={HeartPng} resizeMode="contain" />
      </View>
    </View>
  );
};