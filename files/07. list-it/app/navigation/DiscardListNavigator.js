import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DiscardedScreen from "../screens/DiscardedScreen";
import DiscardedListScreen from "../screens/DiscardedListsScreen";
import { headerOptions } from "../config/styles";

const Stack = createStackNavigator();

const DiscardListNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Discarded"
      component={DiscardedScreen}
      options={headerOptions}
    />
    <Stack.Screen
      name="Discarded Lists"
      component={DiscardedListScreen}
      options={headerOptions}
    />
  </Stack.Navigator>
);

export default DiscardListNavigator;
