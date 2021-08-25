import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { colors } from "../config/colors";
import Button from "../components/Button";
import Logo from "../components/Logo";
import routes from "../navigation/routes";

export default function App({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <Logo style={styles.logoContainer} text="ToDo List" />
      <View style={styles.buttonContainer}>
        <Button
          title={"REGISTER"}
          bkgColor={colors.white}
          color={colors.blue}
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
        <Button
          title={"LOGIN"}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 40,
  },
  buttonContainer: {
    padding: 40,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 200,
  },
});
