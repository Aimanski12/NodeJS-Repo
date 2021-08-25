import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

function HeaderRight({ icon, onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name={icon} color={colors.orange} size={19} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.lightOrange,
    // borderWidth: 20,
    height: 46,
    justifyContent: "center",
    marginRight: 5,
    width: 46,

    // backgroundColor: "gray", ///
  },
  text: {
    fontSize: 10,
    color: colors.orange,
    fontWeight: "700",
  },
});

export default HeaderRight;
