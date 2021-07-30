import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AllListsScreen from "../screens/AllListsScreen";
import { colors } from "../config/colors";
import ListScreen from "../screens/ListScreen";

const Stack = createStackNavigator();

const headerOptions = {
  headerTitleAlign: "center",
  headerTintColor: colors.orange,
  headerStyle: {
    backgroundColor: colors.lightOrange,
  },
};

const ListStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="My Lists"
      component={AllListsScreen}
      options={headerOptions}
    />
    <Stack.Screen
      name={"Individual List"}
      component={ListScreen}
      options={headerOptions}
    />
  </Stack.Navigator>
);

export default ListStackNavigator;
