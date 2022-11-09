import { StyleSheet } from "react-native";

import { colors } from "../../Theme";

export const styles = StyleSheet.create({
  div: {
    elevation: 30,
    backgroundColor: colors.white,
    width: '23%',
    height: '38%',
    justifyContent: "center",
    alignItems: "center",
    margin: 7,
    borderRadius: 7,
  },
  txtDiv: {
    fontSize: 24,
    color: colors.primary,
  }
})