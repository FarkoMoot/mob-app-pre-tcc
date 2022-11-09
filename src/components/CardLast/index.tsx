import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

//import { styles } from './styles';

import BoxIconLDW from './../BoxIconLDW/index'

export default function CardLast(props) {



  return(
    <View >
      <View style={{ width:'100%', flexDirection:'row', justifyContent:'space-around' }} >
        <Text style={{ fontSize:22 }} >{props.dadoss.time1}</Text>
        <Text style={{ fontSize:22 }}>{props.dadoss.time2}</Text>
      </View>
      <View style={{ width:'100%', flexDirection:'row',justifyContent:'space-around', paddingLeft:5, paddingRight:5}}>
        <View style={{ flexDirection: 'row', justifyContent:'space-between'  }} >
          <BoxIconLDW cor={props.dadoss.timeCasa.lastGame1} />
          <BoxIconLDW cor={props.dadoss.timeCasa.lastGame2} />
          <BoxIconLDW cor={props.dadoss.timeCasa.lastGame3} />
          <BoxIconLDW cor={props.dadoss.timeCasa.lastGame4} />
          <BoxIconLDW cor={props.dadoss.timeCasa.lastGame5} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent:'space-between'  }} >
          <BoxIconLDW cor={props.dadoss.timeVisitante.lastGame1} />
          <BoxIconLDW cor={props.dadoss.timeVisitante.lastGame2} />
          <BoxIconLDW cor={props.dadoss.timeVisitante.lastGame3} />
          <BoxIconLDW cor={props.dadoss.timeVisitante.lastGame4} />
          <BoxIconLDW cor={props.dadoss.timeVisitante.lastGame5} />
        </View>
      </View>
    </View>
  )
}