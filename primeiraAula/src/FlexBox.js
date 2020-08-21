import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado lado='20' cor='#7fffd4'/>
            <Quadrado lado='25' cor='#ff801a'/>
            <Quadrado lado='30' cor='#50d1f6'/>
            <Quadrado lado='35' cor='#dd22c1'/>
            <Quadrado lado='40' cor='#8312ed'/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        flexGrow:1,
        backgroundColor:'black',
        width:'85%',
        marginVertical: '30%',
        justifyContent: 'space-around',
        flexDirection: "row"
    }
})