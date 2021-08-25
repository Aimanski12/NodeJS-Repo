import React, { useState, useContext } from "react";
import * as Yup from "yup";
import { StyleSheet, Keyboard } from "react-native";
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
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function RegisterScreen() {
  const { register } = authApi();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (userInfo) => {
    setLoading(true);
    Keyboard.dismiss();
    setError(false);
    const isSignupInvalid = await register(userInfo);
    if (isSignupInvalid) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <ScreenWrapper style={styles.container}>
      <ActivityIndicator visible={loading} />
      <Logo />
      {error ? (
        <ErrorMessage error="Name or email is already used" visible={error} />
      ) : null}
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
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
        <SubmitButton title="Register" />
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

export default RegisterScreen;
