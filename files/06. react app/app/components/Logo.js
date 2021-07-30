import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { colors } from "../config/colors";
import fonts from "../config/font";

function Logo({ style, text }) {
  return (
    <View style={[styles.logoContainer, style]}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
  },
  text: {
    color: colors.blue,
    fontFamily: fonts.primary,
    fontSize: 21,
    fontWeight: "700",
  },
});

export default Logo;
