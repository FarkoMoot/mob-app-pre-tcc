import { StyleSheet } from 'react-native';

import { colors } from './../../Theme';

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
  contentContainerStyle: {
    width: '100%',
    marginRight: '-20%'
  }
});