import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../config/colors";
import fonts from "../../config/font";

function ListDate({ date }) {
  return (
    <View style={styles.container}>
      <Text style={styles.dateStyle}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
    justifyContent: "flex-end",
  },
  dateStyle: {
    fontSize: 13,
    fontStyle: "italic",
    fontFamily: fonts.primary,
    color: colors.timegray,
    textAlign: "right",
    fontWeight: "700",
  },
});

export default ListDate;
