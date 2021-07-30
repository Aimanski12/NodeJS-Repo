import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../../config/colors";

function HeaderCloseButton({ onPressModalBtn }) {
  return (
    <TouchableWithoutFeedback onPress={onPressModalBtn}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="close-thick"
          size={22}
          color={colors.blue}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 55,
    position: "absolute",
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HeaderCloseButton;
