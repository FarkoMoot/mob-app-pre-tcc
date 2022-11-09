import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator,ScrollView } from 'react-native';
import CardStats from './../../components/CardStats'

import { styles } from './styles';

import api2 from './../../services/apiMy';
import { useNavigation, Route } from '@react-navigation/native';
import routes from '../../routes';

export default function Table({ route, navigation }){
  const navigate = useNavigation();

  const [loader, setLoader] = useState(0);
  const [dados, setDados] = useState([]);
 
  const { _time1, _time2 } = route.params

  async function getStats(req, res) {
    res = await api2.post('/findStats', { _time1: _time1})
    
    await setDados( prevState => (res.data) )

    setLoader(1)
  }

  function renderStats() {
    if(loader == 0){
      return(
        <ActivityIndicator />
      )
    } else {
      
      return(
        <CardStats dados1={dados} />    
      )
    }
  }

  useEffect(() => {
    getStats()
    
  },[])

  return(
    <View style={styles.conteiner} >
      <View style={styles.topo} >
        <Text style={{fontSize:22, color: '#fff', marginLeft:7, marginBottom:5}} >Estatisticas</Text>
        <TouchableOpacity onPress={() => navigate.goBack()} style={ styles.btnVoltar }  >
          <Text style={ styles.btnTxt } >VOLTAR</Text>
        </TouchableOpacity>
      </View>
      <View style={{height: 10}} ></View>
      <ScrollView>
        { renderStats() }
      </ScrollView>
    </View>
  );
}