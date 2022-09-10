import React ,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {Text,View,TextInput,SafeAreaView} from 'react-native'
import ProductScreen from '../screens/ProdcutScreen/ProductScreen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const Stack = createNativeStackNavigator();
 const HeaderComponent = ({searchValue,setSearchValue}) => {
   return (
     <SafeAreaView style={{backgroundColor: '#22e3dd'}}>
       <View
         style={{
           padding: 5,
           margin: 10,
           marginLeft: 15,
           backgroundColor: 'white',
           flexDirection: 'row',
           alignItems: 'center',
         }}>
         <EvilIcons name="search" size={25} color="#000" />
         <TextInput
           style={{
             height: 40,
             backgroundColor: 'white',
             marginLeft: 10,
             color: '#000',
           }}
           placeholder="Search..."
         />
       </View>
     </SafeAreaView>
   );
 };
const HometStack = () => {
const [searchValue,setSearchValue] = useState('')
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen
        name="Homes"
        options={{title: 'Home', headerTitleAlign: 'center'}}
      >{() => <HomeScreen 
      searchValue={searchValue}
      />}</Stack.Screen>
      <Stack.Screen
        name="ProductS"
        component={ProductScreen}
        options={{title: 'Product', headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default HometStack;
