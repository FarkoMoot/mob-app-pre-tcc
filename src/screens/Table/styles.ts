import { StyleSheet } from 'react-native';

import { colors } from './../../Theme'

export const styles = StyleSheet.create({
  conteiner: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.tertiary,
  },
  topo: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    alignItems: 'flex-end',
    elevation: 20,
  },
  midView :{
    paddingLeft:10,
    paddingRight:10,
  },
  btnVoltar: {
    elevation: 30,
    backgroundColor: colors.white,
    width: '23%',
    height: '38%',
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
    borderRadius: 7,
  },
  btnTxt: {
    fontSize: 20  ,
    color: colors.primary,
  }
})



/*
width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    */