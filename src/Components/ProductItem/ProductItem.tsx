import React from 'react'
import {Text,View,Image,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
interface productItemProps {
  item: {
    id: number
    title: String
    image: String
    avgRating: number
    ratings: number
    price: number
    oldPrice: number
  };
}
const ProductItem = ({item}:productItemProps)=> {
  const navigation = useNavigation()

  const onPressItem = ()=> {
   // console.warn('item presssed')
    navigation.navigate('ProductS', {id: item.id});
  }
    return (
      <Pressable onPress={onPressItem} style={styles.root}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          <View style={styles.Ratings}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <Icon
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                key={`${item.id}-${i}`}
                color="#FFD700"
              />
            ))}
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>
            From {item.price}
            {item.oldPrice && (
              <Text style={styles.oldPrice}>{item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </Pressable>
    );
}

export default ProductItem