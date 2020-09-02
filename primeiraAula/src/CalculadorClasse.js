import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Button } from 'react-native'

export default class Calculadora extends React.Component {

    state = {
        calcular: this.calcular,
        x: this.x,
        y: this.y
    }
    Soma(x,y) {
        this.setState({calcular: parseInt(x) + parseInt(y)})
    }

    Sub(x,y) {
        this.setState({calcular: x - y})
    }

    Div(x,y) {
        if(y == 0){
            this.setState({calcular: "Divisão por Zero não existe"})
        }
        else{
            this.setState({calcular: x / y})
        }
    }

    Mult(x,y) {
        this.setState({calcular: x * y})
    }
    render() {
        return (
            <View>
                <Text style={styles.text}>Calculadora de Classe</Text>
                <TextInput
                    placeholder="Digite o valor de X"
                    value={this.x}
                    onChangeText={(x) => this.setState({x})}
                />
                <TextInput
                    placeholder="Digite o valor de Y"
                    value={this.y}
                    onChangeText={(y) => this.setState({y})}
                />
                <View style={styles.button}>
                    <Button color="green" title="Soma" onPress={() => this.Soma(this.state.x, this.state.y)} />
                    <Button color="red" title="Subtracao" onPress={() => this.Sub(this.state.x, this.state.y)} />
                    <Button color="blue" title="Multiplicacao" onPress={() => this.Mult(this.state.x, this.state.y)} />
                    <Button color="gray" title="Divisao" onPress={() => this.Div(this.state.x, this.state.y)} />
                </View>
                <Text>Resposta: {this.state.calcular}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        width: '100%'
    }
})