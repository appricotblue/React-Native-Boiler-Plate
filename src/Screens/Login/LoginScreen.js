import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// var windowWidth = Dimensions.get('window').width; //full width
// var windowHeight = Dimensions.get('window').height; //full height

const LoginScreen = () => {
  const navigation = useNavigation();

  const OnLoginPress = () => {
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={OnLoginPress()}>
        <Text style={{color: 'black'}}>Login Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoginScreen;
