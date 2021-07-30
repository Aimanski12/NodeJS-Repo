import React from "react";
import { View, StyleSheet, Text } from "react-native";

import fonts from "../config/font";
import { colors } from "../config/colors";

function EmptyList({ title = "Your list" }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title} is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: fonts.primary,
  },
  text: {
    fontSize: 19,
    color: colors.blue,
    fontWeight: "700",
  },
});

export default EmptyList;
