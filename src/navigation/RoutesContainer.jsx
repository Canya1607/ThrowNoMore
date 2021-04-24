import React from 'react';
import { Image } from 'react-native';
import { MenuHamburger } from '../components/MenuHamburger/MenuHamburger';
import { createStackNavigator } from '@react-navigation/stack';
import {
  getWidthWithScaleFactor,
  getHeightWithScaleFactor
} from '../utils/helpers/LayoutHelper';

// Screens
import ShopsScreen from '../screens/Shops/Shops.Screen';
import OffersScreen from '../screens/Offers/Offers.Screen';

// Images
import LMLogoPng from '../assets/images/lm_logo.png';

const Stack = createStackNavigator();

const RoutesContainer = ({initialRouteName}) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerLeft: () => (
          <Image
            source={LMLogoPng}
            style={{
              marginLeft: getWidthWithScaleFactor(20),
              width: getWidthWithScaleFactor(30),
              height: getHeightWithScaleFactor(35)
            }}
            resizeMode="contain"
          />
        ),
        headerRight: () => <MenuHamburger />
      }}>
      <Stack.Screen name="Shops" component={ShopsScreen}/>
      <Stack.Screen name="Offers" component={OffersScreen} options={({route}) => ({ title: route.params.name })}/>
    </Stack.Navigator>
  )
}

export default RoutesContainer;