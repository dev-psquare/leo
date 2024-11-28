import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  console.log('home');
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Details')
      }}>
        <Text style={{color: 'black', fontSize: 30}}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
