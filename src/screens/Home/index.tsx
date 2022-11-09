import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView,ActivityIndicator } from 'react-native';
//add axios, fazer conexao com api, e solicitar get

import api2 from './../../services/apiMy';

import CardHome from '../../components/CardHome'
import BtnTabela from '../../components/BtnTabela'

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigate = useNavigation();

  const [recebeDados, setRecebeDados] = useState([]);
  const [start, setStart] = useState(0);

  async function findGames( req, res) {
    res = await api2.get('findStart');

    //console.log(res.data[0].item1);
    setRecebeDados( prevState => (res.data) )
    //console.log(recebeDados[0].item1);
    
    setStart(1);
    return
  }

  useEffect(() => {
    findGames();
    //console.log(receb);
  },[start]);
  
  /// pensar numa maneira de usar o mesmo componente pra renderizar tuodos 
  function renderCard(){
    if( start == 0 ) {
      
      return (
        <ActivityIndicator />
      )
    } else if(start == 1) {
      
      //for(var c = 0; c <= recebeDados.length ; c++ ){
        if( recebeDados.length == 0 ){
          return(
            <View>
              <Text>Hoje a grade esta vazia</Text>
            </View>
          )
        }else if(recebeDados.length == 1){
            return(
            <ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />              
            </ScrollView>
            )
        }else if(recebeDados.length == 2){
          return(<ScrollView style={styles.contentContainerStyle}>
            <CardHome
              hora = { recebeDados[0].item1 }
              time1 = { recebeDados[0].item2 }
              time2 = { recebeDados[0].item3 }
            />
            <CardHome
              hora = { recebeDados[1].item1 }
              time1 = { recebeDados[1].item2 }
              time2 = { recebeDados[1].item3 }
            />
          </ScrollView>)
        }else if(recebeDados.length == 3){
          return(<ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />
              <CardHome
                hora = { recebeDados[1].item1 }
                time1 = { recebeDados[1].item2 }
                time2 = { recebeDados[1].item3 }
              />
              <CardHome
                hora = { recebeDados[2].item1 }
                time1 = { recebeDados[2].item2 }
                time2 = { recebeDados[2].item3 }
              />
            </ScrollView>)
        }else if(recebeDados.length == 4){
          return(<ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />
              <CardHome
                hora = { recebeDados[1].item1 }
                time1 = { recebeDados[1].item2 }
                time2 = { recebeDados[1].item3 }
              />
              <CardHome
                hora = { recebeDados[2].item1 }
                time1 = { recebeDados[2].item2 }
                time2 = { recebeDados[2].item3 }
              />
              <CardHome
                hora = { recebeDados[3].item1 }
                time1 = { recebeDados[3].item2 }
                time2 = { recebeDados[3].item3 }
              />
            </ScrollView>)
        }else if(recebeDados.length == 5){
          return(<ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />
              <CardHome
                hora = { recebeDados[1].item1 }
                time1 = { recebeDados[1].item2 }
                time2 = { recebeDados[1].item3 }
              />
              <CardHome
                hora = { recebeDados[2].item1 }
                time1 = { recebeDados[2].item2 }
                time2 = { recebeDados[2].item3 }
              />
              <CardHome
                hora = { recebeDados[3].item1 }
                time1 = { recebeDados[3].item2 }
                time2 = { recebeDados[3].item3 }
              />
              <CardHome
                hora = { recebeDados[4].item1 }
                time1 = { recebeDados[4].item2 }
                time2 = { recebeDados[4].item3 }
              />
            </ScrollView>)
        }else if(recebeDados.length == 6){
          return(<ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />
              <CardHome
                hora = { recebeDados[1].item1 }
                time1 = { recebeDados[1].item2 }
                time2 = { recebeDados[1].item3 }
              />
              <CardHome
                hora = { recebeDados[2].item1 }
                time1 = { recebeDados[2].item2 }
                time2 = { recebeDados[2].item3 }
              />
              <CardHome
                hora = { recebeDados[3].item1 }
                time1 = { recebeDados[3].item2 }
                time2 = { recebeDados[3].item3 }
              />
              <CardHome
                hora = { recebeDados[4].item1 }
                time1 = { recebeDados[4].item2 }
                time2 = { recebeDados[4].item3 }
              />
              <CardHome
                hora = { recebeDados[5].item1 }
                time1 = { recebeDados[5].item2 }
                time2 = { recebeDados[5].item3 }
              />
            </ScrollView>)
        }else if( recebeDados.length == 7){
          return(
            <ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />
              <CardHome
                hora = { recebeDados[1].item1 }
                time1 = { recebeDados[1].item2 }
                time2 = { recebeDados[1].item3 }
              />
              <CardHome
                hora = { recebeDados[2].item1 }
                time1 = { recebeDados[2].item2 }
                time2 = { recebeDados[2].item3 }
              />
              <CardHome
                hora = { recebeDados[3].item1 }
                time1 = { recebeDados[3].item2 }
                time2 = { recebeDados[3].item3 }
              />
              <CardHome
                hora = { recebeDados[4].item1 }
                time1 = { recebeDados[4].item2 }
                time2 = { recebeDados[4].item3 }
              />
              <CardHome
                hora = { recebeDados[5].item1 }
                time1 = { recebeDados[5].item2 }
                time2 = { recebeDados[5].item3 }
              />
              <CardHome
                hora = { recebeDados[6].item1 }
                time1 = { recebeDados[6].item2 }
                time2 = { recebeDados[6].item3 }
              />
            </ScrollView>
          )
        }else if(recebeDados.length == 8){
          return(
            <ScrollView style={styles.contentContainerStyle}>
              <CardHome
                hora = { recebeDados[0].item1 }
                time1 = { recebeDados[0].item2 }
                time2 = { recebeDados[0].item3 }
              />
              <CardHome
                hora = { recebeDados[1].item1 }
                time1 = { recebeDados[1].item2 }
                time2 = { recebeDados[1].item3 }
              />
              <CardHome
                hora = { recebeDados[2].item1 }
                time1 = { recebeDados[2].item2 }
                time2 = { recebeDados[2].item3 }
              />
              <CardHome
                hora = { recebeDados[3].item1 }
                time1 = { recebeDados[3].item2 }
                time2 = { recebeDados[3].item3 }
              />
              <CardHome
                hora = { recebeDados[4].item1 }
                time1 = { recebeDados[4].item2 }
                time2 = { recebeDados[4].item3 }
              />
              <CardHome
                hora = { recebeDados[5].item1 }
                time1 = { recebeDados[5].item2 }
                time2 = { recebeDados[5].item3 }
              />
              <CardHome
                hora = { recebeDados[6].item1 }
                time1 = { recebeDados[6].item2 }
                time2 = { recebeDados[6].item3 }
              />
              <CardHome
                hora = { recebeDados[7].item1 }
                time1 = { recebeDados[7].item2 }
                time2 = { recebeDados[7].item3 }
              />
            </ScrollView>
          )
        }else if(recebeDados.length == 9){
          return(<ScrollView style={styles.contentContainerStyle}>
            <CardHome
              hora = { recebeDados[0].item1 }
              time1 = { recebeDados[0].item2 }
              time2 = { recebeDados[0].item3 }
            />
            <CardHome
              hora = { recebeDados[1].item1 }
              time1 = { recebeDados[1].item2 }
              time2 = { recebeDados[1].item3 }
            />
            <CardHome
              hora = { recebeDados[2].item1 }
              time1 = { recebeDados[2].item2 }
              time2 = { recebeDados[2].item3 }
            />
            <CardHome
              hora = { recebeDados[3].item1 }
              time1 = { recebeDados[3].item2 }
              time2 = { recebeDados[3].item3 }
            />
            <CardHome
              hora = { recebeDados[4].item1 }
              time1 = { recebeDados[4].item2 }
              time2 = { recebeDados[4].item3 }
            />
            <CardHome
              hora = { recebeDados[5].item1 }
              time1 = { recebeDados[5].item2 }
              time2 = { recebeDados[5].item3 }
            />
            <CardHome
              hora = { recebeDados[6].item1 }
              time1 = { recebeDados[6].item2 }
              time2 = { recebeDados[6].item3 }
            />
            <CardHome
              hora = { recebeDados[7].item1 }
              time1 = { recebeDados[7].item2 }
              time2 = { recebeDados[7].item3 }
            />
            <CardHome
              hora = { recebeDados[8].item1 }
              time1 = { recebeDados[8].item2 }
              time2 = { recebeDados[8].item3 }
            />
          </ScrollView>)
        }
      //}
      
    }
  }

  return(
    <View style={styles.conteiner}>
      <View style={styles.topo} >
        <Text style={{fontSize:22, color: '#fff', marginLeft:7, marginBottom:5}} >Jogos do dia:</Text>
        <BtnTabela />
      </View>

        { renderCard() }
      
    </View>
  );
}

