import React from "react";
import { StyleSheet, Text, TouchableOpacity, Keyboard } from "react-native";

import { colors } from "../config/colors";
import fonts from "../config/font";

function Button({
  bkgColor = colors.blue,
  color = colors.white,
  onPress,
  title,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
        onPress();
      }}
      style={[styles.button, { backgroundColor: bkgColor }]}
    >
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 27,
    height: 54,
    justifyContent: "center",
    marginVertical: 7,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.3,
  },
});

export default Button;
