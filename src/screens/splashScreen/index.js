import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { CustomText, logo } from '../../components'



export const SplashScreen = () => {
  return (
    <View style={styles.container}>      
      <logo />
      <CustomText>Empire Stream</CustomText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 64,
    width: 64
  },


});
