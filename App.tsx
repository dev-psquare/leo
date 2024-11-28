import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppNavigator from './src/navigations/AppNavigator'

type Props = {}

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1, backgroundColor:"white"}}>
        <AppNavigator/>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App