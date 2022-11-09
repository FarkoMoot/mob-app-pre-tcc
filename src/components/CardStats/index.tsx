import { Logs } from 'expo';
import React, { useEffect, useState } from 'react';
import { View, Text,ScrollView, ActivityIndicator } from 'react-native'
import { VictoryBar, VictoryChart, VictoryTheme, VictoryGroup,VictoryLabel } from 'victory-native'

import CardLast from './../CardLast'
import BoxTips from '../BoxTips';

import { colors } from './../../Theme/index'
import { styles } from './style';

import api2 from './../../services/apiMy'
import CardGoals from '../CardGoals';

export default function CardStats(props) {
  const [label, setLabel] = useState([])
  const [finalPro, setFinalPro] = useState([])
  const [finalContra, setFinalContra] = useState([])
  const [mediaPro, setMediaPro] = useState(0)
  const [mediaProHT, setMediaProHT] = useState(0)
  const [mediaProFT, setMediaProFT] = useState(0)
  const [mediaContra, setMediaContra] = useState(0)
  const [mediaContraHT, setMediaContraHT] = useState(0)
  const [mediaContraFT, setMediaContraFT] = useState(0)
  const [dadosGols, setDadosGoals ] = useState([])
  
  const [label2, setLabel2] = useState([])
  const [finalPro2, setFinalPro2] = useState([])
  const [finalContra2, setFinalContra2] = useState([])
  const [mediaPro2, setMediaPro2] = useState(0)
  const [mediaProHT2, setMediaProHT2] = useState(0)
  const [mediaProFT2, setMediaProFT2] = useState(0)
  const [mediaContra2, setMediaContra2] = useState(0)
  const [mediaContraHT2, setMediaContraHT2] = useState(0)
  const [mediaContraFT2, setMediaContraFT2] = useState(0)
  const [dadosGols2, setDadosGoals2 ] = useState([])

  const [loadTips, setLoadTips] = useState(0)
  const [loadLast, setLoadLast] = useState(0)
  const [loadGoals1, setLoadGoals1 ] = useState(0)
  const [loadGoals2, setLoadGoals2 ] = useState(0)

  const [dadosLast, setDadosLast] = useState([]);
  const [llabel, setLlabel] = useState(['5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90'])
  const [grapPro, setGrapPro] = useState([]);
  const [grapContra, setGrapContra] = useState([]);
  
  const [grapPro2, setGrapPro2] = useState([]);
  const [grapContra2, setGrapContra2] = useState([]);
  
  const [ddata, setDdata] = useState([]);

  async function getGoals(req, res) {
    res = await api2.post('/findGoals', { _time1: props.dados1.time1 })
    await setDadosGoals( prevState => (res.data) )
    res = await api2.post('/findGoals', { _time1: props.dados1.time2 })
    await setDadosGoals2( prevState => (res.data) )
    setLoadGoals1(1)
  }

  function getCorner() {
    var calcula1 = [], calcula2 = [], calcula0 = [];
    
    for( var i = 0; i < props.dados1.receInfos.timeCasa.length ; i = i + 3 ){
      calcula0.push(props.dados1.receInfos.timeCasa[i]);
      calcula1.push(parseInt(props.dados1.receInfos.timeCasa[i+1]));
      calcula2.push(parseInt(props.dados1.receInfos.timeCasa[i+2]));
    }

    calcula1.sort((a, b) => (a-b));
    calcula2.sort((a, b) => (a-b));

    var razao1 = 0// calcula1[0];
    var razao2 = 0//calcula2[0];

    for ( let i in calcula1 ){
      if( calcula1[i] > 0 ){
        razao1 = calcula1[i]
        break
      }
    }

    for ( let i in calcula2 ){
      if( calcula2[i] > 0 ){
        razao2 = calcula2[i]
        break
      }
    }
    
    var recebePro = [], recebeContra = [], recebeTimer = [];
    for( var i = 0; i < props.dados1.receInfos.timeCasa.length ; i = i + 3 ){
      recebeTimer.push(props.dados1.receInfos.timeCasa[i]);
      recebePro.push(Math.round(parseInt(props.dados1.receInfos.timeCasa[i+1]) / razao1))
      recebeContra.push(Math.round(parseInt(props.dados1.receInfos.timeCasa[i+2]) / razao2))
    }
    
    var x = ['5 - 15','15 - 30','30 - 45','45 - 60','60 - 75','75 - 90']
    var y = [],y1 =[];
    var count = 0;
    for( var i = 0; i < recebePro.length; i = i + 3 ){
      y[count] = recebePro[i] + recebePro[i+1] + recebePro[i+2]
      y1[count] = recebeContra[i] + recebeContra[i+1] + recebeContra[i+2]
      count = count + 1;
    }

    const kk = {
      x,
      y,
      y1
    }

    setDdata(prevState => (kk))

    var x = 0, y=0;
    var x1 = 0, y1=0;
    var z,z1,z2,z3;
    var k,k1;
    for( let i = 0; i<=8 ; i++ ){
      x = x + recebePro[i] 
      x1 = x1 + recebeContra[i]
      y = y + recebePro[i+9]
      y1 = y1 + recebeContra[i+9]
    }
    
    z = x / 8; //ht pro
    z1 = y / 8; // ft pro
    z2 = x1 / 8; //ht contra
    z3 = y1 / 8; // ft contra

    k = (x + y) / 8 // pro
    k1 = (x1 + y1) / 8 // contra




    setMediaPro(k.toFixed(2)) 
    setMediaProHT(z.toFixed(2))
    setMediaProFT(z1.toFixed(2))
    setMediaContra(k1.toFixed(2))
    setMediaContraHT(z2.toFixed(2))
    setMediaContraFT(z3.toFixed(2))

    setLabel( prevState => (recebeTimer) )
    setFinalPro( prevState => (recebePro) );
    setFinalContra( prevState => (recebeContra) );
    
    
    const data=[
      {x: recebeTimer[0], y: recebePro[0]},
      {x: recebeTimer[1], y: recebePro[1]},
      {x: recebeTimer[2], y: recebePro[2]},
      {x: recebeTimer[3], y: recebePro[3]},
      {x: recebeTimer[4], y: recebePro[4]},
      {x: recebeTimer[5], y: recebePro[5]},
      {x: recebeTimer[6], y: recebePro[6]},
      {x: recebeTimer[7], y: recebePro[7]},
      {x: recebeTimer[8], y: recebePro[8]},
      {x: recebeTimer[9], y: recebePro[9]},
      {x: recebeTimer[10], y: recebePro[10]},
      {x: recebeTimer[11], y: recebePro[11]},
      {x: recebeTimer[12], y: recebePro[12]},
      {x: recebeTimer[13], y: recebePro[13]},
      {x: recebeTimer[14], y: recebePro[14]},
      {x: recebeTimer[15], y: recebePro[15]},
      {x: recebeTimer[16], y: recebePro[16]},
      {x: recebeTimer[17], y: recebePro[17]},
    ]
    
    const data2=[
      {x: recebeTimer[0], y: recebeContra[0]},
      {x: recebeTimer[1], y: recebeContra[1]},
      {x: recebeTimer[2], y: recebeContra[2]},
      {x: recebeTimer[3], y: recebeContra[3]},
      {x: recebeTimer[4], y: recebeContra[4]},
      {x: recebeTimer[5], y: recebeContra[5]},
      {x: recebeTimer[6], y: recebeContra[6]},
      {x: recebeTimer[7], y: recebeContra[7]},
      {x: recebeTimer[8], y: recebeContra[8]},
      {x: recebeTimer[9], y: recebeContra[9]},
      {x: recebeTimer[10], y: recebeContra[10]},
      {x: recebeTimer[11], y: recebeContra[11]},
      {x: recebeTimer[12], y: recebeContra[12]},
      {x: recebeTimer[13], y: recebeContra[13]},
      {x: recebeTimer[14], y: recebeContra[14]},
      {x: recebeTimer[15], y: recebeContra[15]},
      {x: recebeTimer[16], y: recebeContra[16]},
      {x: recebeTimer[17], y: recebeContra[17]},
    ]

    setGrapPro(prevState => (data))
    setGrapContra(prevState => (data2))
    

    return
  }

  function getCorner2() {
    var calcula1 = [], calcula2 = [], calcula0 = [];
    
    for( var i = 0; i < props.dados1.receInfos.timeCasa.length ; i = i + 3 ){
      calcula0.push(props.dados1.receInfos.timeVisitante[i]);
      calcula1.push(parseInt(props.dados1.receInfos.timeVisitante[i+1]));
      calcula2.push(parseInt(props.dados1.receInfos.timeVisitante[i+2]));
    }

    calcula1.sort((a, b) => (a-b));
    calcula2.sort((a, b) => (a-b));

    var razao1 = 0// calcula1[0];
    var razao2 = 0//calcula2[0];

    for ( let i in calcula1 ){
      if( calcula1[i] > 0 ){
        razao1 = calcula1[i]
        break
      }
    }

    for ( let i in calcula2 ){
      if( calcula2[i] > 0 ){
        razao2 = calcula2[i]
        break
      }
    }

    var recebePro = [], recebeContra = [], recebeTimer = [];

    for( var i = 0; i < props.dados1.receInfos.timeCasa.length ; i = i + 3 ){
      recebeTimer.push(props.dados1.receInfos.timeVisitante[i]);
      recebePro.push(Math.round(parseInt(props.dados1.receInfos.timeVisitante[i+1]) / razao1))
      recebeContra.push(Math.round(parseInt(props.dados1.receInfos.timeVisitante[i+2]) / razao2))
    }
    
    var x = 0, y=0;
    var x1 = 0, y1=0;
    var z,z1,z2,z3;
    var k,k1;

    for( let i = 0; i<=8 ; i++ ){
      x = x + recebePro[i] 
      y = y + recebePro[i+9]
      x1 = x1 + recebeContra[i]
      y1 = y1 + recebeContra[i+9]
    }

    z = x / 8; //ht pro
    z1 = y / 8; // ft pro
    z2 = x1 / 8; //ht contra
    z3 = y1 / 8; // ft contra

    k = (x + y) / 8 // pro
    k1 = (x1 + y1) / 8 // contra

    setMediaPro2(k.toFixed(2)) 
    setMediaProHT2(z.toFixed(2))
    setMediaProFT2(z1.toFixed(2))
    setMediaContra2(k1.toFixed(2))
    setMediaContraHT2(z2.toFixed(2))
    setMediaContraFT2(z3.toFixed(2))

    setLabel2( prevState => (recebeTimer) )
    setFinalPro2( prevState => (recebePro) );
    setFinalContra2( prevState => (recebeContra) );

    const data=[
      {x: recebeTimer[0], y: recebePro[0]},
      {x: recebeTimer[1], y: recebePro[1]},
      {x: recebeTimer[2], y: recebePro[2]},
      {x: recebeTimer[3], y: recebePro[3]},
      {x: recebeTimer[4], y: recebePro[4]},
      {x: recebeTimer[5], y: recebePro[5]},
      {x: recebeTimer[6], y: recebePro[6]},
      {x: recebeTimer[7], y: recebePro[7]},
      {x: recebeTimer[8], y: recebePro[8]},
      {x: recebeTimer[9], y: recebePro[9]},
      {x: recebeTimer[10], y: recebePro[10]},
      {x: recebeTimer[11], y: recebePro[11]},
      {x: recebeTimer[12], y: recebePro[12]},
      {x: recebeTimer[13], y: recebePro[13]},
      {x: recebeTimer[14], y: recebePro[14]},
      {x: recebeTimer[15], y: recebePro[15]},
      {x: recebeTimer[16], y: recebePro[16]},
      {x: recebeTimer[17], y: recebePro[17]},
    ]
    
    const data2=[
      {x: recebeTimer[0], y: recebeContra[0]},
      {x: recebeTimer[1], y: recebeContra[1]},
      {x: recebeTimer[2], y: recebeContra[2]},
      {x: recebeTimer[3], y: recebeContra[3]},
      {x: recebeTimer[4], y: recebeContra[4]},
      {x: recebeTimer[5], y: recebeContra[5]},
      {x: recebeTimer[6], y: recebeContra[6]},
      {x: recebeTimer[7], y: recebeContra[7]},
      {x: recebeTimer[8], y: recebeContra[8]},
      {x: recebeTimer[9], y: recebeContra[9]},
      {x: recebeTimer[10], y: recebeContra[10]},
      {x: recebeTimer[11], y: recebeContra[11]},
      {x: recebeTimer[12], y: recebeContra[12]},
      {x: recebeTimer[13], y: recebeContra[13]},
      {x: recebeTimer[14], y: recebeContra[14]},
      {x: recebeTimer[15], y: recebeContra[15]},
      {x: recebeTimer[16], y: recebeContra[16]},
      {x: recebeTimer[17], y: recebeContra[17]},
    ]

    setGrapPro2(prevState => (data))
    setGrapContra2(prevState => (data2))


    setLoadTips(1)
    return
  }

  function renderGoals() {
    if( loadGoals1 == 0  ){
      return(<ActivityIndicator />)
    }else if( loadGoals1 == 1){
      return(
        <View style={{ flexDirection:'row', width: '100%'}} >
          <CardGoals dadoss={dadosGols} />
          <CardGoals dadoss={dadosGols2} />
        </View>
      )
    }
  }

  function renderLast5(){
    if( loadLast == 0 ){
      return(<ActivityIndicator />)
    }else if( loadLast == 1 ){
      return(
        <>
          <CardLast dadoss={dadosLast}/>
        </>
      )
    }
  }

  async function getLast(req, res) {
    res = await api2.post('/findLast', { _time1: props.dados1.time1 })
    await setDadosLast( prevState => (res.data) )
    setLoadLast(1)
  }

  function renderTips() {
    if(loadTips == 0){
      return(<ActivityIndicator />)
    } else if(loadTips == 1) {
      const i = ((parseFloat(mediaPro) + parseFloat(mediaPro2)) / 2 - 1).toFixed(0)
      return(
        <BoxTips dadoss={i} />
      )
    }
  }

  useEffect( () => {
    getLast()
    getCorner()
    getCorner2()
    //getGoals()
  
  }, [ loadLast, loadGoals1 ])


  return(
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 3, marginTop:10}} >
        <Text style={{ fontSize: 24 }} >{props.dados1.time1}</Text>
        <Text> x </Text>
        <Text style={{ fontSize: 24 }} >{props.dados1.time2}</Text>
      </View>

      <View style={{ height:1, backgroundColor: '#000', opacity:0.4 , width: '90%', marginLeft: '5%' }} ></View>
      
      <View>
        <View style={{ alignItems: 'center', justifyContent:'center', marginTop: 10 }} >
          <Text>Ultimos jogos:</Text>
        </View>
        { renderLast5() }
      </View>

      <View style={{ height:1, backgroundColor: '#000', opacity:0.4 , width: '90%', marginLeft: '5%', marginTop: 5 }} ></View>

      <View>
        <View style={{ alignItems: 'center', justifyContent:'center', marginTop: 10 }} >
          <Text>Escanteios:</Text>
        </View>
        <View style={{ width:'100%', flexDirection:'row', justifyContent:'space-around' }}>
          <Text style={{ fontSize:21 }}>{props.dados1.time1}</Text>
          <Text style={{ fontSize:21 }}>{props.dados1.time2}</Text>
        </View>
        <View style={{ width:'100%', flexDirection:'row' }} >
          <View style={{ width:'50%'}} >
            <View style={{ width:'50%', height:25, backgroundColor: colors.gray0, marginLeft: '50%', flexDirection:'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight:5, borderTopLeftRadius:10,borderTopRightRadius:10, }} >
              <Text>
                Pro
              </Text>
              <Text>
                Contra
              </Text>
            </View>
            
            <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray2,}} >
              <View style={{ width:'50%', marginLeft:5}} >
                <Text style={styles.fontCantos} >Media:</Text>
              </View>
              <View style={{ width:'50%', flexDirection:'row'}} >
                <View style={{ width:'50%', alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro} >{mediaPro}</Text></View>
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{mediaContra}</Text></View>
              </View>
            </View>

            <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray1,}} >
              <View style={{ width:'50%', marginLeft:5}} >
                <Text style={styles.fontCantos} >Media HT:</Text>
              </View>
              <View style={{ width:'50%', flexDirection:'row'}} >
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{mediaProHT}</Text></View>
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{mediaContraHT}</Text></View>
              </View>
            </View>

            <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray2}} >
              <View style={{ width:'50%', marginLeft:5}} >
                <Text style={styles.fontCantos} >Media FT:</Text>
              </View>
              <View style={{ width:'50%', flexDirection:'row'}} >
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{mediaProFT}</Text></View>
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{mediaContraHT}</Text></View>
              </View>
            </View>
          </View>
          <View style={{ width:'50%'}}>
            <View style={{ width:'50%', height:25, backgroundColor: colors.gray0 , marginLeft: '50%', flexDirection:'row', justifyContent: 'space-between', paddingLeft: 5, paddingRight:5,borderTopLeftRadius:10,borderTopRightRadius:10,}} >
              <Text>
                Pro
              </Text>
              <Text>
                Contra
              </Text>
            </View>
            <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray2}} >
              <View style={{ width:'50%', marginLeft:5}} >
                <Text style={styles.fontCantos} >Media:</Text>
              </View>
              <View style={{ width:'50%', flexDirection:'row'}} >
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{mediaPro2}</Text></View>
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{mediaContra2}</Text></View>
              </View>
            </View>
            <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray1}} >
              <View style={{ width:'50%', marginLeft:5}} >
                <Text style={styles.fontCantos} >Media HT:</Text>
              </View>
              <View style={{ width:'50%', flexDirection:'row'}} >
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{mediaProHT2}</Text></View>
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{mediaContraHT2}</Text></View>
              </View>
            </View>
            <View style={{ width:'100%', flexDirection: 'row', backgroundColor: colors.gray2}} >
              <View style={{ width:'50%', marginLeft:5}} >
                <Text style={styles.fontCantos} >Media FT:</Text>
              </View>
              <View style={{ width:'50%', flexDirection:'row'}} >
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoPro}>{mediaProFT2}</Text></View>
                <View style={{ width:'50%',  alignItems: 'center', justifyContent:'center'}}><Text style={styles.fontCantoContra}>{mediaContraHT2}</Text></View>
              </View>
            </View>

          </View>
          </View>

          <View style={{ height:1, backgroundColor: '#000', opacity:0.4 , width: '90%', marginLeft: '5%', marginTop: 5 }} ></View>

          <View style={{ paddingLeft: 5, paddingRight: 5, alignItems: 'center', justifyContent: 'center'}} >
            <View style={{ alignItems: 'center', justifyContent:'center', marginBottom:0}} >
              <Text>Escanteios por tempo de Jogo:</Text>
            </View>
            <View style={{ marginLeft: 20, marginRight:0 }} >
              <View style={{ }} >
                <Text style={{ fontSize:16 }} >{props.dados1.time1}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: 'flex-start', marginTop: -10}} >
                <Text style={{ fontSize:10 }} >Minutos</Text>
                <View style={{ marginLeft: 80,flexDirection: 'row', justifyContent:'center', alignItems: 'center' }} >
                  <View style={{ width:13, height:13, backgroundColor: colors.red , borderRadius:5 }} ></View>
                  <Text  style={{ fontSize:10 }}  >Escanteios Sofridos</Text>
                </View>
                <View style={{marginLeft: 15,flexDirection: 'row', justifyContent:'center', alignItems: 'center' }} >
                  <View style={{ width:13, height:13, backgroundColor: colors.primary , borderRadius:5  }} ></View>
                  <Text  style={{ fontSize:10 }}  >Escanteios Concedidos</Text>
                </View>
              </View>
              <View style={{ marginTop:-25 }} >
                <VictoryChart width={385} height={480} theme={VictoryTheme.material}>
                  <VictoryGroup
                    offset={5.5}
                    colorScale={[colors.primary, colors.red]}
                  >
                    <VictoryBar
                      height={120}
                      horizontal
                      barRatio={0.8} // grossura da barra
                      data={grapPro}
                      
                    />
                    <VictoryBar
                      height={120}
                      horizontal
                      barRatio={0.8} // grossura da barra
                      data={grapContra}  
                    />
                  </VictoryGroup>
                </VictoryChart>
              </View>

              <View style={{ }} >
                <Text style={{ fontSize:16 }} >{props.dados1.time2}</Text>
              </View>
              <View style={{ flexDirection: 'row', paddingTop: 20, alignItems: 'flex-start', marginTop: -10}} >
                <Text style={{ fontSize:10 }} >Minutos</Text>
                <View style={{ marginLeft: 80,flexDirection: 'row', justifyContent:'center', alignItems: 'center' }} >
                  <View style={{ width:13, height:13, backgroundColor: colors.red , borderRadius:5 }} ></View>
                  <Text  style={{ fontSize:10 }}  >Escanteios Sofridos</Text>
                </View>
                <View style={{marginLeft: 15,flexDirection: 'row', justifyContent:'center', alignItems: 'center' }} >
                  <View style={{ width:13, height:13, backgroundColor: colors.primary , borderRadius:5  }} ></View>
                  <Text  style={{ fontSize:10 }}  >Escanteios Concedidos</Text>
                </View>
              </View>

              <View style={{ marginTop:-25 }} >
                <VictoryChart width={385} height={480} theme={VictoryTheme.material}>
                  <VictoryGroup
                      offset={5.5}
                      colorScale={[colors.primary, colors.red]}
                    >
                      <VictoryBar
                        horizontal
                        barRatio={0.8} // grossura da barra
                        data={grapPro2}  
                      />
                      <VictoryBar
                        horizontal
                        barRatio={0.8} // grossura da barra
                        data={grapContra2}  
                      />
                  </VictoryGroup>
                </VictoryChart>
              </View>
            </View>
          </View>

          <View style={{ height:1, backgroundColor: '#000', opacity:0.4 , width: '90%', marginLeft: '5%', marginTop: 5 }} ></View>

      </View>
      <View>
        { renderTips() }
      </View>
    </View>
  )
}





/*

 <View>
              <VictoryChart width={400} height={400} theme={VictoryTheme.material}>
                <VictoryBar
                  
                  horizontal
                  barRatio={0.8} // grossura da barra
                  data={grap}  
                />
              </VictoryChart>
            </View>




categories={{
                          x: ["0-5", "5-10", "10-15", "15-20", "20-25","35-40", "40-45", "45-50", "50-55", "55-60","60-65", "65-70", "70-75", "75-80", "80-85", "85-90"]
                        }}


<View>
            <VictoryChart width={400} height={280} theme={VictoryTheme.material}>
              <VictoryGroup
                  offset={5}
                  colorScale={[colors.primary, colors.red]}
                >
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalPro}  
                  />
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalContra}  
                  />
              </VictoryGroup>
            </VictoryChart>
          </View>
          
          <View>
            <VictoryChart width={400} height={280} theme={VictoryTheme.material}>
              <VictoryGroup
                  offset={5}
                  colorScale={[colors.primary, colors.red]}
                >
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalPro2}  
                  />
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalContra2}  
                  />
              </VictoryGroup>
            </VictoryChart>
          </View>























<View style={{ flex:1 }} > <Text> a</Text> </View>
            <Text>Media:{mediaPro}</Text>
            <Text>Media HT:{mediaProHT}</Text>
            <Text>Media FT:{mediaProFT}</Text>










<>
        <View style={{ paddingLeft: 5, paddingRight: 5, alignItems: 'center', justifyContent: 'center'}} >
          <Text style={styles.txtGeral}>  Ultimas 8 partidas a media de escanteios do time mandante 
            foi de <Text style={styles.infoTxt}> {mediaPro} </Text>, sendo media de <Text style={styles.infoTxt} >{mediaProHT}</Text> no HT e <Text style={styles.infoTxt}>{mediaProFT}</Text> no FT.
          </Text>
          <Text style={styles.txtGeral}>  Em relaçao aos escanteios sofridos por parte do mandante temos
            <Text style={styles.infoTxt}> {mediaContra}</Text>, sendo media de <Text style={styles.infoTxt}>{mediaContraHT}</Text> no HT e <Text style={styles.infoTxt}>{mediaContraFT}</Text> no FT.
          </Text>
          <View>
            <VictoryChart width={400} height={280} theme={VictoryTheme.material}>
              <VictoryGroup
                  offset={5}
                  colorScale={[colors.primary, colors.red]}
                >
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalPro}  
                  />
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalContra}  
                  />
              </VictoryGroup>
            </VictoryChart>
          </View>
          <Text style={styles.txtGeral}>  Ultimas 8 partidas a media de escanteios do time visitante 
            foi de <Text style={styles.infoTxt}>{mediaPro2}</Text>, sendo media de <Text style={styles.infoTxt}>{mediaProHT2}</Text> no HT e <Text style={styles.infoTxt}>{mediaProFT2}</Text> no FT.
          </Text>
          <Text style={styles.txtGeral}>  Em relaçao aos escanteios sofridos por parte do visitante temos
            <Text style={styles.infoTxt}> {mediaContra2}</Text>, sendo media de <Text style={styles.infoTxt}>{mediaContraHT2}</Text> no HT e <Text style={styles.infoTxt}>{mediaContraFT2}</Text> no FT.
          </Text>
          <View>
            <VictoryChart width={400} height={280} theme={VictoryTheme.material}>
              <VictoryGroup
                  offset={5}
                  colorScale={[colors.primary, colors.red]}
                >
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalPro2}  
                  />
                  <VictoryBar
                    barRatio={0.8} // grossura da barra
                    data={finalContra2}  
                  />
              </VictoryGroup>
            </VictoryChart>
          </View>
        </View>
      </>
      */