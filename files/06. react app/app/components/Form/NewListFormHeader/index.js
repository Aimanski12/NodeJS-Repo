import React from "react";
import { View, StyleSheet } from "react-native";
import Contants from "expo-constants";

import { colors } from "../../../config/colors";
import HeaderText from "./HeaderText";
import HeaderCloseButton from "./HeaderCloseButton";

function CreateListScreen({ title, onPressModalBtn, withIcon = false }) {
  return (
    <View style={styles.headerWrapper}>
      <HeaderText title={title} />
      {withIcon && <HeaderCloseButton onPressModalBtn={onPressModalBtn} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Contants.statusBarHeight,
    backgroundColor: colors.lightOrange,
  },
  headerWrapper: {
    height: 55,
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateListScreen;
