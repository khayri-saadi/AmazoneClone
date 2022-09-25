import React from "react";
import {Text,View, SafeAreaView} from 'react-native';
import ButtonComponent from '../../Components/Button/Button.tsx';
import {Auth} from 'aws-amplify'

const SignOutScreen = ()=> {

    const onLogout = ()=> {
        Auth.signOut()

    }
    return(
        <SafeAreaView>
        <ButtonComponent  text='Sign out' onPress={onLogout} />
        </SafeAreaView>
    )
}

export default SignOutScreen