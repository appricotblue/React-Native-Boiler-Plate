import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

const LoginScreen = ({navigation: {navigate}}) => {
  const OnLoginPress = () => {
    navigate('home');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => OnLoginPress()}>
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
