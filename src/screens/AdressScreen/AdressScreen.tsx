import React, {useState} from 'react'
import {Text, View, TextInput, Alert, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Country from 'country-list';
import styles from './styles';
import ButtonComponent from '../../Components/Button/Button'
import CheckBox from 'react-native-check-box';
//console.log(countries)
const AdressScreen = ()=> {
    const countries = Country.getData();
const [country,setCountry] = useState(countries[0].name)
const [name,setName] = useState('')
const [phNumber, setphNumber] = useState(null);
const [Adress, setAdress] = useState('');
const [AdressError,setAdressError] = useState('')
const [PhoneError,setPhoneError] = useState(null)
const [City, setCity] = useState('');
const [Code, setCode] = useState(null);
//console.log(phNumber)
//console.log(name)

const ValidatePhone = ()=> {
    if(phNumber.length < 8) {
    setPhoneError('Invalid phone')
    }
}
const ValidateAdress = ()=> {
    if(Adress.length < 5) {
        setAdressError('Adress invalid')
    }

}
const Checkout = ()=> {

    if(!! AdressError) {
        Alert.alert('Fix all fields errors before submitting !')
        return;
    }
    if(!name) {
        Alert.alert('please Fill all the blancks !')
    } else {
        console.warn('Address added successfully !')
    }
    
}
    return (
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker onValueChange={setCountry} selectedValue={country}>
            {countries.map(country => (
              <Picker.Item value={country.code} label={country.name} />
            ))}
          </Picker>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onEndEditing={ValidatePhone}
            placeholder="phone number"
            value={phNumber}
            onChangeText={(number) => {
              setphNumber(number);
              setPhoneError(null);
            }}
            keyboardType={'phone-pad'}
          />
          {!!PhoneError && (
            <Text style={{color: 'red', marginLeft: 2, marginBottom: 10}}>
              {PhoneError}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Adress</Text>
          <TextInput
            style={styles.input}
            onEndEditing={ValidateAdress}
            placeholder="Adress , Ex : Tunisia , Siliana"
            value={Adress}
            onChangeText={text => {
              setAdress(text);
              setAdressError('');
            }}
          />
          {!!AdressError && (
            <Text style={{color: 'red', marginLeft: 2, marginBottom: 10}}>
              {AdressError}
            </Text>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City, Ex: Siliana"
            value={City}
            onChangeText={setCity}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.label}>Zip Code</Text>
          <TextInput style={styles.Code} value={Code} onChangeText={setCity} />
        </View>
       

        <ButtonComponent text="Checkout" onPress={Checkout} />
      </ScrollView>
    );
}

export default AdressScreen;  