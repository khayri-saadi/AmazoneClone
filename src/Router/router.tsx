import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProdcutScreen/ProductScreen'
import AdressScreen from '../screens/AdressScreen/AdressScreen';
import ShoppingCard from '../screens/ShoppingCardScreen/ShoppingCard';
import  HometStack from './HomeStack'
import BottomTabs from './BottomTab';
const Stack = createNativeStackNavigator()
const Router = ()=> {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="HomeTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Router