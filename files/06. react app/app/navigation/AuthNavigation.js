import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../config/colors";
import LoginScreen from "../screens/LoginScreen";
import WelcomScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Register"
      component={RegisterScreen}
      options={{
        headerTintColor: colors.blue,
      }}
    />
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerTintColor: colors.blue,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigation;
