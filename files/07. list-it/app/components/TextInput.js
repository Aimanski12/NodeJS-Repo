import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";
import fonts from "../config/font";

function FormField({ icon, ...otherProps }) {
  return (
    <View style={styles.inputContainer}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        style={styles.icon}
        color={colors.gray}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.gray}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    width: "86%",
    height: 50,
    marginHorizontal: "7%",
    marginVertical: 7,
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 27,
    alignItems: "center",
    padding: 15,
  },
  textInput: {
    width: "87%",
    color: colors.blue,
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.2,
    fontFamily: fonts.primary,
  },
});

export default FormField;
