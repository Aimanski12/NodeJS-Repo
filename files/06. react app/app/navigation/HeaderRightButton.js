import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

function HeaderRight({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="pencil-plus"
          color={colors.orange}
          size={23}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // backgroundColor: colors.red,
    borderColor: colors.lightOrange,
    // borderRadius: 20,
    borderWidth: 10,
    // bottom: 30,
    height: 40,
    justifyContent: "center",
    width: 40,
  },
});

export default HeaderRight;
