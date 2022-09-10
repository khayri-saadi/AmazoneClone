import React , {useState} from 'react'
import {Text,View,ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../Components/quantitySelector/quantitySelector';
import ButtonComponent from '../../Components/Button/Button';
import ImageCarousel from '../../Components/ImageCarousel/ImageCarousel';
const ProductScreen = ()=> {
    const [selectedoption,setSelectedoption] = useState(product.options ? product.options[0]  : null)

    const [quantity,setQuantity] = useState(1)
  // console.log(selectedoption,'rrr')
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
          From {product.price}
          {product.oldPrice && (
            <Text style={styles.oldPrice}>{product.oldPrice}</Text>
          )}
        </Text>
        <Text style={styles.description}>{product.description}</Text>
        <QuantitySelector Quantity={quantity} setQuantity={setQuantity} />
        <ButtonComponent
          text="Add to cart"
          onPress={() => {
            console.warn('added with success');
          }}
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