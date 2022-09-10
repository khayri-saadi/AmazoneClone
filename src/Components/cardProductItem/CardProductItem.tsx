import React , {useState} from 'react'
import {Text,View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native'
import styles from './styles';
import QuantitySelector from '../quantitySelector/quantitySelector'
interface CardProductItemProps {
  CardItem : {
     id: string;
    quantity: number;
    option?:string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?:number;
    }
  }
}
const CardProductItem = ({CardItem}:CardProductItemProps)=> {
  const {quantity : quantityProp,item} = CardItem
    const [quantity, setQuantity] = useState(quantityProp);
    //console.log(quantityProp,'ccccccccc')
    const route = useRoute()
    console.log(route.params)
    return (
      <View style={styles.root}>
        <View style={styles.row}>
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
        </View>
        <View style={styles.QuantityContainer}>
          <QuantitySelector Quantity={quantity} setQuantity={setQuantity} />
        </View>
      </View>
    );
}

export default CardProductItem;