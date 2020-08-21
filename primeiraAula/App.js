import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flexbox from './src/FlexBox'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Flexbox/>
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
