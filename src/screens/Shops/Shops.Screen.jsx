import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ShopTopBar } from '../../components/ShopTopBar/ShopTopBar';
import { Shop } from '../../components/Shop/Shop';
import { styles } from './Shops.styles';

// API
import { getShops } from '../../api/shops';

const Shops = ({ navigation }) => {
  const [shopsData, setShopsData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getShops().then((response) => {
        setShopsData(response.data.result);
        console.log(response.data.result);
      });
    })

    return unsubscribe;
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ShopTopBar />
      <FlatList 
        style={styles.listContainer}
        data={shopsData}
        keyExtractor={(item) => `shop-${item.id}`}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.push('Offers', { id: item.id, name: item.name })}>
            <Shop {...item}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Shops;