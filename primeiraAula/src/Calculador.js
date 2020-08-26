import React,{useState} from 'react';
import { TextInput, View, Button, StyleSheet, Text } from 'react-native';

export default function Calc (){
    const [result, setResult] = useState()
    const [n1, SetN1] = useState()
    const [n2, SetN2] = useState()
    let x,y
    function soma(){
        x = parseInt(n1)
        y = parseInt(n2)
        setResult(x + y)
    }
    function menos(){
        x = parseInt(n1)
        y = parseInt(n2)
        setResult(x - y)
    }
    function multi(){
        x = parseInt(n1)
        y = parseInt(n2)
        setResult(x * y)
    }
    function div(){
        x = parseInt(n1)
        y = parseInt(n2)
        if(n1 || n2 == 0){
            setResult("Impossivel divisão por 0")
        }
        else{
            setResult(x / y)
        }
    }
    function limpar(){
        setResult(0)
    }
    return (
    <>
        <View>
            <TextInput
                placeholder="1 Numero"
                value={n1}
                onChangeText={n1 => SetN1(n1)}
            />
            <TextInput
                placeholder="2 Numero"
                value={n2}
                onChangeText={n2 => SetN2(n2)}
            />
            <Button title="+" onPress={soma}/>
            <Button title="-" onPress={menos}/>
            <Button title="*" onPress={multi}/>
            <Button title="/" onPress={div}/>
            <Button title="C" onPress={limpar}/>
            <Text style={styles.text2}>Resultado: {result}</Text>
        </View>
    </>
    );
}
const styles = StyleSheet.create({
    text2:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold'
    }
})