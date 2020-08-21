import React,{useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function Exercicio(props) {
    const [numero, setNumero] = useState(props.inicial)
    let inicial = props.inicial

    function multi(){
        setNumero(numero * 2)
    }
    function limpar(){
        setNumero(inicial)
    }
    return(
        <React.Fragment>
            <View style={styles.view1}>
            <Text style={styles.text}>Valor Inicial: {inicial}</Text>
            </View> 
            <View style={styles.view2}>
                <Button title="Limpar" onPress={limpar}/>
                <Button title="Calcular Dobro" onPress={multi}/>
                <Text style={styles.text2}>Resposta: {numero}</Text>
            </View>                 
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    view1:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#fff',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'center', // centraliza o eixo y
    },
    view2:{
        flexGrow:1, //O componente pode crescer e ocupar a tela toda
        backgroundColor: '#ff0',//cor de fundo
        alignItems: 'center', // centraliza o eixo x
        justifyContent: 'space-around', // centraliza o eixo y
        flexDirection: 'row'
    },
    text:{
        fontSize:32,
        color:'firebrick',
        fontWeight:'bold'
    },
    text2:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold'
    }
})