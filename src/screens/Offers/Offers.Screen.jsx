import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { OffersTopBar } from '../../components/OffersTopBar/OffersTopBar';
import { Offer } from '../../components/Offer/Offer';
import { styles } from './Offers.styles';

// API
import { getOffers } from '../../api/shops';

const Offers = ({ route, navigation }) => {
  const [offersData, setOffersData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (route?.params?.id) {
        getOffers(route.params.id).then((response) => {
          setOffersData(response.data.result);
          console.log(response.data.result);
        });
      };
    });

    return unsubscribe;
  })

  if (offersData.length) {
    return (
      <View style={styles.container}>
        <OffersTopBar onBackPress={() => navigation.goBack()} />
        <FlatList 
          style={styles.listContainer}
          data={offersData}
          keyExtractor={(item) => `offer-${item.id}`}
          renderItem={({item}) => (
            <Offer {...item}/>
          )}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <OffersTopBar onBackPress={() => navigation.goBack()} />
        <Text style={styles.emptyText}>No Products ¯\_(ツ)_/¯</Text>
      </View>
    )
  }
}

export default Offers;