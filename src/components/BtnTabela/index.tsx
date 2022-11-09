import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from "./styles";

import { useNavigation } from '@react-navigation/native'

export default function() {
  const navigate = useNavigation();
  return(
    <TouchableOpacity style={styles.div} onPress={ () => navigate.navigate('Table') } >
      <Text style={styles.txtDiv} >Tabela</Text>
    </TouchableOpacity>
  )
}