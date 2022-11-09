import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native'

import { styles } from './style'

export default function BoxTips(props) {

  const pressAlert = () =>
    Alert.alert(
      "? - Tips",
      "Valor obtido da media das medias de escanteios marcado ((MediaEscanteiosTime1 + MediaEscanteiosTime2)/2 ) - 1",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return(
    <View style={{padding:5, margin: 5, backgroundColor: '#398F14', borderRadius: 5 }} >
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} >
        <Text style={{fontSize: 19,alignItems: 'center',justifyContent: 'center', color: '#fff'}} >
          TIP:
        </Text>
        <TouchableOpacity onPress={pressAlert} style={styles.btnVoltar2} ><Text style={{ fontSize: 19, color: '#398F14' }} >?</Text></TouchableOpacity>
      </View>
      <Text style={{fontSize: 17,alignItems: 'center',justifyContent: 'center', color: '#fff'}}>
        Entrar no <View style={styles.btnVoltar} ><Text style={{ fontSize: 19, color: '#398F14' }} >+{props.dadoss} Escanteios</Text></View> na partida, buscar odd maior ou igual a 1.50
      </Text>
    </View>
  )
}