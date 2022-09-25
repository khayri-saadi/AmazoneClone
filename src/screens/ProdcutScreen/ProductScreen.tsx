import React , {useState,useEffect} from 'react'
import {Text, View, ScrollView,ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
//import product from '../../data/product';
import QuantitySelector from '../../Components/quantitySelector/quantitySelector';
import ButtonComponent from '../../Components/Button/Button';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
import {DataStore} from 'aws-amplify';
import {Product,CartProduct} from '../../models';
import {useRoute} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
const ProductScreen = ()=> {
  const route = useRoute()
  const [product,setProduct] = useState<Product | undefined>(undefined)
  const [selectedoption,setSelectedoption] = useState<String | undefined>(undefined)
  const [quantity,setQuantity] = useState(1)
  

  useEffect(() => {
    if (!route.params?.id) {
      return;
    }
    DataStore.query(Product, route.params.id).then(setProduct);
  },[route.params?.id]);

  useEffect(()=> {
    if(product?.options){
      setSelectedoption(product.options[0])
    }

  },[product])
  if(!product) {
    return <ActivityIndicator />
  }

  const onAddToCart = async() => {
    const UserData = await Auth.currentAuthenticatedUser()
    //console.log(UserData.attributes.sub);
    if(!product || !UserData) {
      return;
    }
    const newCartProduct = new CartProduct({
      userSub : UserData.attributes.sub,
      quantity,
      options : selectedoption,
      ProductId : product.id,

    })
    DataStore.save(newCartProduct)

  };
    return (
     
      <ScrollView style={styles.root}>
        <Text style={styles.title}>{product.title}</Text>
        <ImageCarousel images={product.images} />
        <Picker
          selectedValue={selectedoption}
          onValueChange={itemValue => setSelectedoption(itemValue)}>
          {product.options.map(option => (
            <Picker label={option} value={option} />
          ))}
        </Picker>

        <Text style={styles.price}>
          From {product.price.toFixed(2)}
          {product.oldPrice && (
            <Text style={styles.oldPrice}>{product.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
        <QuantitySelector Quantity={quantity} setQuantity={setQuantity} />
        <ButtonComponent
          text="Add to cart"
          onPress={onAddToCart}
        />
        <ButtonComponent
          text="Buy Now"
          onPress={() => {
            console.warn('Buy Now');
          }}
          ContainerStyle={{backgroundColor: '#e3e3e3'}}
        />
      </ScrollView>
    
    );
}
export default ProductScreen;