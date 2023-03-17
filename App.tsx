/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { StatusBar} from 'react-native'
import StackNavigation from './src/navigation/StackNavigation'

const App =() =>{
  return (
    <>
    <StatusBar animated={ true } barStyle= "dark-content"/>
    <StackNavigation/>
    </>
  )
}

export default App;
