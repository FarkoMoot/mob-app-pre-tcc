import { StyleSheet } from 'react-native';

import { colors } from './../../Theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '95%',
    width: '90%',
    backgroundColor: '#C2D49B',
    marginLeft: '2%',
    borderRadius: 3
  },
  infoTxt: {
    fontSize: 21,
  },
  txtGeral: {
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnVoltar: {
    elevation: 30,
    backgroundColor: colors.white,
    width: '25%',
    height: '41%',
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
    borderRadius: 7,
  },
  fontCantos: {
    fontSize: 16
  },
  fontCantoPro: {
    fontSize: 14
  },
  fontCantoContra: {
    fontSize: 14
  },
})