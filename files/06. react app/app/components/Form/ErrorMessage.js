import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../config/colors";

function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "82%",
    marginHorizontal: "9%",
  },
  text: {
    color: colors.orange,
    fontWeight: "600",
  },
});

export default ErrorMessage;
