import React from "react";
import { View, StyleSheet } from "react-native";

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
  headerWrapper: {
    marginTop: 20,
    height: 55,
    width: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreateListScreen;
