import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../config/colors";

function Icon({ icon }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={17} color={colors.gray} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "10%",
  },
});

export default Icon;
