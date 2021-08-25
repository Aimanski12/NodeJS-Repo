import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "../../../config/colors";
import fonts from "../../../config/font";

function HeaderText({ title }) {
  return <Text style={styles.headerText}>{title}</Text>;
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: colors.orange,
    fontFamily: fonts.primary,
  },
});

export default HeaderText;
