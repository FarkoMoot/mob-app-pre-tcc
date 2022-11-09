import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup,VictoryLabel } from 'victory-native'

import { styles } from './style'

import { colors } from '../../Theme';

export default function CardGoals(props) {
  const [gols,setGols] = useState([])

  const [media,setMedia] = useState([])
  const [mediaHT,setMediaHT] = useState([])
  const [mediaFT,setMediaFT] = useState([])

  const [media2,setMedia2] = useState([])
  const [mediaHT2,setMediaHT2] = useState([])
  const [mediaFT2,setMediaFT2] = useState([])

  const [overGols, setOverGols] = useState(0)
  const [offGols, setOffGols] = useState(0)

  const [overGols2, setOverGols2] = useState(0)
  const [offGols2, setOffGols2] = useState(0)
  
  var a = [];
  function start() {
    a.push(parseInt(props.dadoss.recebeGOLS.tempo1_15))
    a.push(parseInt(props.dadoss.recebeGOLS.tempo15_30))
    a.push(parseInt(props.dadoss.recebeGOLS.tempo30_45))
    a.push(parseInt(props.dadoss.recebeGOLS.tempo45_60))
    a.push(parseInt(props.dadoss.recebeGOLS.tempo60_75))
    a.push(parseInt(props.dadoss.recebeGOLS.tempo75_90))
    a.push(parseInt(props.dadoss.recebeGOLS.over_2_gols))
    a.push(parseInt(props.dadoss.recebeGOLS.gol_off_65))

    var total_gols = 0
    for ( var i = 0; i <= (a.length - 2 ) ; i = i + 1 ){
      total_gols = total_gols + a[i];
    }
    var p_overGols = 0, p_offGols = 0;

    p_overGols = (a[6] / total_gols) * 100;
    p_offGols = (a[7] / total_gols) *100;

    var p_overGols_output = p_overGols.toFixed(2)
    var p_offGols_output =  p_offGols.toFixed(2)
    
    var p_overGols_output2 = (100 - p_overGols).toFixed(2) 
    var p_offGols_output2 =  (100 - p_offGols).toFixed(2) 
    

    setOverGols( prevState => (p_overGols_output) )
    setOffGols( prevState => (p_offGols_output) )
    
    setOverGols2( prevState => (p_overGols_output2) )
    setOffGols2( prevState => (p_offGols_output2) )
  }

  //console.log(props.dadoss.recebeGOLS);

  useEffect(() => {
    start()
  }, [])

  
  return(
    <View style={{flex: 1}} >
      <View style={{  flexDirection:'row', justifyContent:'space-around' }}>
        <Text style={{ fontSize:21 }}>{props.dadoss.time}</Text>
      </View>


      <View style={{ flex: 1}}>
        <View style={{ width:'50%', height:25, backgroundColor: colors.gray0 , marginLeft: '50%', flexDirection:'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight:5,borderTopLeftRadius:10,borderTopRightRadius:10,}} >
          <Text>
            Over
          </Text>
          <Text>
            Under
          </Text>
        </View>

        <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray2}} >
          <View style={{ width:'50%', marginLeft:5}} >
            <Text style={styles.fontCantos} >2,5 Gols:</Text>
          </View>
          <View style={{ width:'50%', flexDirection:'row'}} >
            <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{overGols}%</Text></View>
            <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{overGols2}%</Text></View>
          </View>
        </View>

        <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray1}} >
          <View style={{ width:'50%', marginLeft:5}} >
            <Text style={styles.fontCantos} >Gols pos 65':</Text>
          </View>
          <View style={{ width:'50%', flexDirection:'row'}} >
            <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{offGols}%</Text></View>
            <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{offGols2}%</Text></View>
          </View>
        </View>
      </View>
    </View>
  )
}