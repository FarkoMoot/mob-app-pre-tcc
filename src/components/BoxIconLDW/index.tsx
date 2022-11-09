import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'

import { colors } from '../../Theme'

export default function BoxIconLDW(props) {
  const [loadColors, setLoadColors] = useState(0)
  
  function converterCores() {
    if(loadColors == 0){
      return(
        <View>
          <Text>Carregando...</Text>
        </View>
      )
    }else if( loadColors == 1){
      if( props.cor == 'boxIconW'){
        return(
          <View style={{ width:30, height:30, borderRadius:2, backgroundColor: colors.primary, alignItems: 'center', justifyContent:'center', marginLeft:3 }} >
            <Text>V</Text>
          </View>
        )
      }else if( props.cor == 'boxIconD') {
        return(
          <View style={{ width:30, height:30, borderRadius:2, backgroundColor: colors.yelow,alignItems: 'center', justifyContent:'center' , marginLeft:3}} >
            <Text>E</Text>
          </View>
        )
      }else if( props.cor == 'boxIconL') {
        return(
          <View style={{ width:30, height:30, borderRadius:2, backgroundColor: colors.red, alignItems: 'center', justifyContent:'center', marginLeft:3 }} >
            <Text>D</Text>
          </View>
        )
      }
    }
  }

  function loadCor() {
    setLoadColors(1)
  }

  useEffect( () => {
    setLoadColors(1)
  }, [loadColors] )

  return(
    <View>
      { converterCores() }
    </View>
  )
}