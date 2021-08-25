import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AllListsScreen from "../screens/AllListsScreen";
import { headerOptions } from "../config/styles.js";
import ListScreen from "../screens/ListScreen";

const Stack = createStackNavigator();

const ListStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="My Lists"
      component={AllListsScreen}
      options={headerOptions}
      // options={headerOptions}
    />
    <Stack.Screen
      name={"Individual List"}
      component={ListScreen}
      options={headerOptions}
    />
  </Stack.Navigator>
);

export default ListStackNavigator;
