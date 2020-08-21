import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Contador from './src/contador/ContadorV2'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={estilo.textHeader}>Olá Mundo!</Text> */}
      {/* <Text>Minha primeira aplicação</Text> */}
      {/* <Primeiro/> */}
      {/* <Comp/>
      <Comp1/>
      <Comp2/>
      <Comp3/> */}
      {/* <Fragmento/> */}
      {/* <Exercicio inicial="4"/> */}
      {/* <Botao/> */}
      {/* <Parametro valor1="10" valor2 ="20"></Parametro>
      <Parametro valor1="30" valor2 ="40"></Parametro> */}
      {/* <Contador inicial={10}/> */}
      <StatusBar style="auto" />
      <Contador/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  text:{
    color:'red',
    fontSize:18,
  }
});
