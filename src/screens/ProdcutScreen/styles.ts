import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root :  {
    padding: 10,
    backgroundColor : '#fff'

  },
      price: {
    fontSize: 18,
    color: '#111',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    color:'#111'
  },
  title : {
    color:'#111'

  },
  description : {
    marginVertical : 10,
    color:'#111',
    lineHeight :25,

  },
  
  
})

export default styles;