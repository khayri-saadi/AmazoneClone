import React from 'react'
import {Text, View, Pressable,StyleSheet} from 'react-native';
interface buttonProps {
  text: string;
  onPress: () => void;
  ContainerStyle? : object;
}

const ButtonComponent = ({text,onPress,ContainerStyle} : buttonProps)=> {
    return(
        <Pressable onPress={onPress} style={{...styles.root,...ContainerStyle}}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    margin: 10,
    padding: 14,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ButtonComponent