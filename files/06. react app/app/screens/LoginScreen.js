import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet, Keyboard } from "react-native";
import Constants from "expo-constants";

import { colors } from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import Logo from "../components/Logo";
import ScreenWrapper from "../components/ScreenWrapper";
import SubmitButton from "../components/Form/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (userInfo) => {
    console.log(userInfo);
    setLoading(true);
    Keyboard.dismiss();
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Logo />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    backgroundColor: colors.lightgray,
    top: Constants.statusBarHeight,
  },
});

export default LoginScreen;
