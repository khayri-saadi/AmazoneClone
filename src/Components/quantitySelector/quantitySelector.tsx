import React from "react";
import {Text, View, Pressable,StyleSheet} from 'react-native';


const QuantitySelector = ({Quantity, setQuantity}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, Quantity - 1));
  };
  const onPlus = () => {
    setQuantity(Quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.btnTxt}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{Quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.btnTxt}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#e3e3e3',
    borderWidth : 1,
    width : 130,
    justifyContent : 'space-between',
    marginLeft : 5
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#c2c2c2'
  },
  quantity : {
    color:'#007eb9'
  },
  btnTxt : {
    fontSize : 18,
    color:'#111'
  }
});
export default QuantitySelector