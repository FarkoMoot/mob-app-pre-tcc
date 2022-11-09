import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

import { colors } from '../../Theme';

const imgAthleticoMG = require('./../../imgs/30.png');
const imgAvai = require('./../../imgs/6.png');
const imgFlamengo = require('./../../imgs/18.png');
const imgBotafogo = require('./../../imgs/22.png');
const imgFluminense = require('./../../imgs/26.png');
const imgAmericaMG = require('./../../imgs/33.png');
const imgJuventude = require('./../../imgs/43.png');
const imgInternacional = require('./../../imgs/44.png');
const imgPalmeiras = require('./../../imgs/56.png');
const imgSaopaulo = require('./../../imgs/57.png');
const imgSantos = require('./../../imgs/63.png');
const imgBraga = require('./../../imgs/64.png');
const imgCorintias = require('./../../imgs/65.png');
const imgCoritiba = require('./../../imgs/84.png');
const imgAthleticoGO = require('./../../imgs/98.png');
const imgCeara = require('./../../imgs/105.png');
const imgGoias = require('./../../imgs/115.png');
const imgFortaleza = require('./../../imgs/131.png');
const imgAthleticoPR = require('./../../imgs/185.png');
const imgCuiaba = require('./../../imgs/204.png');

export default function ItemTabela(props) {

  const [road, setRoad] = useState('');
  //console.log(props.all.posicao);
  function testa0() {
    if(props.all.posicao <= 9){
      <Text>
        0{props.all.posicao}     
      </Text>
    }else {
      <Text>
        {props.all.posicao}     
      </Text>
    }
  }

  useEffect(()=>{
    //console.log(props.all.time.time_id)
  },[]);

  var n_img;
  if(props.all.time.time_id == 30){
    n_img = imgAthleticoMG
  }else if( props.all.time.time_id == 6 ){
    n_img = imgAvai
  }else if( props.all.time.time_id == 18 ){
    n_img = imgFlamengo
  }else if( props.all.time.time_id == 22 ){
    n_img = imgBotafogo
  }else if( props.all.time.time_id == 26 ){
    n_img = imgFluminense
  }else if( props.all.time.time_id == 33 ){
    n_img = imgAmericaMG
  }else if( props.all.time.time_id == 43 ){
    n_img = imgJuventude
  }else if( props.all.time.time_id == 44 ){
    n_img = imgInternacional
  }else if( props.all.time.time_id == 56 ){
    n_img = imgPalmeiras
  }else if( props.all.time.time_id == 57 ){
    n_img = imgSaopaulo
  }else if( props.all.time.time_id == 63 ){
    n_img = imgSantos
  }else if( props.all.time.time_id == 64 ){
    n_img = imgBraga
  }else if( props.all.time.time_id == 65 ){
    n_img = imgCorintias
  }else if( props.all.time.time_id == 84 ){
    n_img = imgCoritiba
  }else if( props.all.time.time_id == 98 ){
    n_img = imgAthleticoGO
  }else if( props.all.time.time_id == 105 ){
    n_img = imgCeara
  }else if( props.all.time.time_id == 115 ){
    n_img = imgGoias
  }else if( props.all.time.time_id == 131 ){
    n_img = imgFortaleza
  }else if( props.all.time.time_id == 185 ){
    n_img = imgAthleticoPR
  }else if( props.all.time.time_id == 204 ){
    n_img = imgCuiaba
  }


  return (
    <View style={{ height: 55, marginTop: 1, flexDirection: 'row', borderRadius:2, alignItems: 'center', justifyContent:'flex-start', backgroundColor: '#C2D49B' }} >
      <View style={{ width: '60%', flexDirection: 'row', elevation: 5, paddingLeft:5 }} >
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}} >
          <Text style={{fontSize:20, width: 27}}>
            {props.all.posicao}     
          </Text>
        </View>
        <Image style={{width:40, height:40}} source={ n_img } />
        <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}} >
          <Text style={{fontSize:20}} >
            {props.all.time.nome_popular}
          </Text>
        </View>
      </View>
      <View style={{ width: '40%', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center' ,paddingRight:5, backgroundColor: '#b1c87e',height: '100%',paddingLeft:5 }} >
        <Text style={{fontSize:20,width: 27}}>
          {props.all.pontos}
        </Text>
        <Text style={{fontSize:20, color: '#317b22',width: 27}}>
          {props.all.vitorias}
        </Text>
        <Text style={{fontSize:20, color: '#A58D12',width: 27}}>
          {props.all.empates}
        </Text>
        <Text style={{fontSize:20, color: '#ba2d0b',width: 27}}>
          {props.all.derrotas}
        </Text>
      </View>
    </View>
  )
}