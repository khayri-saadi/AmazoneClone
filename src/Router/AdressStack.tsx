import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AdressScreen from '../screens/AdressScreen/AdressScreen';
import ShoppingCard from '../screens/ShoppingCardScreen/ShoppingCard';
const Stack = createNativeStackNavigator();
const AdressScreenStack= () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homes"
        component={ShoppingCard}
        options={{title: 'ShoppingCart', headerTitleAlign: 'center'}}
      />
      <Stack.Screen name="Address" component={AdressScreen} options={{title:'Adress' ,headerTitleAlign:'center'}} />
    </Stack.Navigator>
  );
};

export default AdressScreenStack;
