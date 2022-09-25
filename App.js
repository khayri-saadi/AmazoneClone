/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';
import Router from './src/Router/router.tsx';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import config from './src/aws-exports'
Amplify.configure(config)
const App = ()=> {
  return(
   <Router />
  )
}

export default withAuthenticator(App);
