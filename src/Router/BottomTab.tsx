import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProdcutScreen/ProductScreen';
import AdressScreen from '../screens/AdressScreen/AdressScreen';
import ShoppingCard from '../screens/ShoppingCardScreen/ShoppingCard';
import HometStack from './HomeStack';
import Icon from 'react-native-vector-icons/Entypo';
import AdressScreenStack from './AdressStack';
import SignOutScreen from '../screens/SignOutScreen/signOutScreen'
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        inactiveTintColor: '#e3e3e3',
        activeTintColor: '#e47911',
      }}>
      <Tab.Screen
        name="Home"
        component={HometStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Adress"
        component={SignOutScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Card"
        component={AdressScreenStack}
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
