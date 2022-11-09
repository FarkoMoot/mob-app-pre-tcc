import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { useNavigation, Route } from '@react-navigation/native';

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


/// condicionar as variaveis aos times que recebo nas PROPS

export default function CardHome(Props) {
  const navigate = useNavigation()

  var n_img, n_img2;

  if(Props.time1 == 'Atletico MG'){
    n_img = imgAthleticoMG;
  }else if( Props.time1 == 'Avai' ){
    n_img = imgAvai;
  }else if( Props.time1 == 'Fluminense' ){
    n_img = imgFluminense;
  }else if( Props.time1 == 'Atletico GO' ){
    n_img = imgAthleticoGO;
  }else if( Props.time1 == 'Athletico PR' ){
    n_img = imgAthleticoPR;
  }else if( Props.time1 == 'Juventude' ){
    n_img = imgJuventude;
  }else if( Props.time1 == 'Flamengo' ){
    n_img = imgFlamengo;
  }else if( Props.time1 == 'Bragantino' ){
    n_img = imgBraga;
  }else if( Props.time1 == 'Goias' ){
    n_img = imgGoias;
  }else if( Props.time1 == 'Fortaleza' ){
    n_img = imgFortaleza;
  }else if( Props.time1 == 'Ceara' ){
    n_img = imgCeara;
  }else if( Props.time1 == 'America MG' ){
    n_img = imgAmericaMG;
  }else if( Props.time1 == 'Internacional' ){
    n_img = imgInternacional;
  }else if( Props.time1 == 'Santos' ){
    n_img = imgSantos;
  }else if( Props.time1 == 'Botafogo' ){
    n_img = imgBotafogo;
  }else if( Props.time1 == 'Palmeiras' ){
    n_img = imgPalmeiras;
  }else if( Props.time1 == 'Cuiaba' ){
    n_img = imgCuiaba;
  }else if( Props.time1 == 'Coritiba' ){
    n_img = imgCoritiba;
  }else if( Props.time1 == 'Sao Paulo' ){
    n_img = imgSaopaulo;
  }else if( Props.time1 == 'Corinthians' ){
    n_img = imgCorintias;
  }

  if(Props.time2 == 'Atletico MG'){
    n_img2 = imgAthleticoMG;
  }else if( Props.time2 == 'Avai' ){
    n_img2 = imgAvai;
  }else if( Props.time2 == 'Fluminense' ){
    n_img2 = imgFluminense;
  }else if( Props.time2 == 'Atletico GO' ){
    n_img2 = imgAthleticoGO;
  }else if( Props.time2 == 'Athletico PR' ){
    n_img2 = imgAthleticoPR;
  }else if( Props.time2 == 'Juventude' ){
    n_img2 = imgJuventude;
  }else if( Props.time2 == 'Flamengo' ){
    n_img2 = imgFlamengo;
  }else if( Props.time2 == 'Bragantino' ){
    n_img2 = imgBraga;
  }else if( Props.time2 == 'Goias' ){
    n_img2 = imgGoias;
  }else if( Props.time2 == 'Fortaleza' ){
    n_img2 = imgFortaleza;
  }else if( Props.time2 == 'Ceara' ){
    n_img2 = imgCeara;
  }else if( Props.time2 == 'America MG' ){
    n_img2 = imgAmericaMG;
  }else if( Props.time2 == 'Internacional' ){
    n_img2 = imgInternacional;
  }else if( Props.time2 == 'Santos' ){
    n_img2 = imgSantos;
  }else if( Props.time2 == 'Botafogo' ){
    n_img2 = imgBotafogo;
  }else if( Props.time2 == 'Palmeiras' ){
    n_img2 = imgPalmeiras;
  }else if( Props.time2 == 'Cuiaba' ){
    n_img2 = imgCuiaba;
  }else if( Props.time2 == 'Coritiba' ){
    n_img2 = imgCoritiba;
  }else if( Props.time2 == 'Sao Paulo' ){
    n_img2 = imgSaopaulo;
  }else if( Props.time2 == 'Corinthians' ){
    n_img2 = imgCorintias;
  }

  //fuso horario
  const hora = parseInt(Props.hora) - 4
  //const horaFinal = toString(hora)

  //recebendo nomes time1 e 2
  const { time1, time2 } = Props;

  return(
    <View style={styles.card} >
      <View style={{alignItems: 'center'}} >
        <Text style={{ fontSize: 18 }} >{hora}:00</Text>
      </View>
      <View style={styles.midCard} >
        <View style={{ width:'42%', alignItems: 'center' }}>
          <Image style={styles.imgs} source={ n_img } />
          <Text> </Text>
          <Text style={{fontSize:18}} >{time1}</Text>
        </View>
        <View style={{ width:'16%',alignItems: 'center' }}>
          <Text style={{fontSize:18}} >x</Text>
        </View>
        <View style={{ width:'42%',alignItems: 'center' }}>
        <Image style={styles.imgs} source={ n_img2 } />
          <Text> </Text>
          <Text style={{fontSize:18}} >{time2}</Text>
        </View>
      </View>

        
      <View style={styles.viewBtns} >
        <TouchableOpacity style={styles.btns} onPress={ () => navigate.navigate('Stats', { '_time1':time1,'_time2':time2 }) }  >
          <Text style={styles.txtBtns} >Estatisticas</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

//_time1={Props.time1} _time2={Props.time2}
//{ '_time1':'teste1','_time2':'teste2' }