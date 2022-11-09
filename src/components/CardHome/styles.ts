import { StyleSheet } from 'react-native';

import { colors } from '../../Theme';

export const styles = StyleSheet.create({
  card: {
    elevation: 10,
    marginTop: 10,
    height: 220,
    width: '80%',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    
    shadowColor: '#000',
  },
  midCard: {
    flexDirection: 'row',
    height:'62%',
    paddingLeft:10,
    paddingRight:10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgs:{
    width: 80,
    height: 80,
  },

  //btns
  viewBtns: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft:30,
    paddingRight:30,
    alignItems: 'center',
  },
  btns: {
    width: 120,
    height:40,
    backgroundColor: '#398F14',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  txtBtns: {
    fontSize: 20,
    color: '#fff',
  }
});

