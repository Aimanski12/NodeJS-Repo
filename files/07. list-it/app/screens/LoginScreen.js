import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet, Keyboard, Text } from "react-native";
import Constants from "expo-constants";

import { colors } from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";
import ErrorMessage from "../components/Form/ErrorMessage";
import Form from "../components/Form/Form";
import FormField from "../components/Form/FormField";
import Logo from "../components/Logo";
import ScreenWrapper from "../components/ScreenWrapper";
import SubmitButton from "../components/Form/SubmitButton";

import authApi from "../auth/authApi";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen() {
  const { logIn } = authApi();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (userInfo) => {
    setLoading(true);
    Keyboard.dismiss();
    setError(false);
    const isLoginInValid = await logIn(userInfo);
    if (isLoginInValid) {
      setError(true);
      setLoading(false);
    }
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Logo />
      {error ? (
        <ErrorMessage error="Invalid username or password" visible={error} />
      ) : null}
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
