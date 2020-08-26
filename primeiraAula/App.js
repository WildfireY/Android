import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Calc from './src/Calculador'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Calc></Calc>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    fontSize:18,
  }
});
