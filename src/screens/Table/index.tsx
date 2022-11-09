import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity,ScrollView,ActivityIndicator } from 'react-native';
import api from './../../services/apiFotebol';

import ItemTabela from './../../components/ItemTabela';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';

//class Table extends Component {
export default function Table(){
  const navigate = useNavigation();

  const [loader, setLoader] = useState(0);

  const [ data, setData ] = useState([]);

  ///
  function loadTable(){
    if( loader == 0 ) {
      return (
        <ActivityIndicator />
      )
    } else  {
      //for(var x = 0; x <= data.length; x++ ){
      return(
        <View style={{ width: '100%' }} >
          <View style={{height: 25, width: '100%', flexDirection: 'row', alignContent: 'flex-end', paddingTop: 3}} >
            <View style={{ width:'60%' }} ></View>
            <View style={{backgroundColor:'#ccc', borderTopEndRadius:10, borderTopStartRadius:10 ,flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', flex:1, paddingLeft:5 }} >
              <Text style={{ fontSize:16, width: 30 }} >Pts</Text>
              <Text style={{ fontSize:16, width: 30 }} >V</Text>
              <Text style={{ fontSize:16, width: 30 }} >E</Text>
              <Text style={{ fontSize:16, width: 30 }} >D</Text>
            </View>
          </View>
          <ItemTabela all = { data[0] }/>
          <ItemTabela all = { data[1] }/>
          <ItemTabela all = { data[2] }/>
          <ItemTabela all = { data[3] }/>
          <ItemTabela all = { data[4] }/>
          <ItemTabela all = { data[5] }/>
          <ItemTabela all = { data[6] }/>
          <ItemTabela all = { data[7] }/>
          <ItemTabela all = { data[8] }/>
          <ItemTabela all = { data[9] }/>
          <ItemTabela all = { data[10] }/>
          <ItemTabela all = { data[11] }/>
          <ItemTabela all = { data[12] }/>
          <ItemTabela all = { data[13] }/>
          <ItemTabela all = { data[14] }/>
          <ItemTabela all = { data[15] }/>
          <ItemTabela all = { data[16] }/>
          <ItemTabela all = { data[17] }/>
          <ItemTabela all = { data[18] }/>
          <ItemTabela all = { data[19] }/>
        </View>
      )
    }
  }

  async function getData(req, res) {
    res = await api.get(`campeonatos/10/tabela`);
    setData( prevState => (res.data) );
    setLoader(1);
  }
  
  useEffect(()=>{
    getData();
  },[loader])  // 

  return(
    <View style={styles.conteiner} >
      <View style={styles.topo} >
        <Text style={{fontSize:22, color: '#fff', marginLeft:7, marginBottom:5}} >Brasileirão Serie-A</Text>
        <TouchableOpacity onPress={() => navigate.goBack()} style={ styles.btnVoltar }  >
          <Text style={ styles.btnTxt } >VOLTAR</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.midView} >
        { loadTable() }
      </ScrollView>
    </View>
  )
  
}
