import React , {useState} from 'react';
import {View, StyleSheet, FlatList,Text,Pressable} from 'react-native';
import products from '../../data/cart';
import CardProductItem from '../../Components/cardProductItem/CardProductItem';
import ButtonComponent from '../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
const ShoppingCard = () => {

  const TotalPrice = products.reduce((summedPrice,product)=> (
    summedPrice + product.item.price * product.quantity
  ),0);


  const navigation = useNavigation()
 
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CardProductItem CardItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18, color: '#111'}}>
              Subtotal ({products.length} items) :
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${TotalPrice.toFixed(2)}
              </Text>
            </Text>
            <ButtonComponent
              text="Proceed to checkout"
              onPress={() => {
                  navigation.navigate('Address');
              }}
              ContainerStyle={{backgroundColor: '#e47911'}}
            />
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCard;
