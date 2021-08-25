import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/colors";

function ActionButton({ icon, backgroundColor, onPress, title }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, backgroundColor]}>
        <MaterialCommunityIcons name={icon} size={18} color={colors.blue} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: 60,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 11,
    color: colors.blue,
    textAlign: "center",
  },
});

export default ActionButton;
