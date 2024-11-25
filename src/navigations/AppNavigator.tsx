import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

type Props = {};

const Stack = createStackNavigator();

const AppNavigator = (props: Props) => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
