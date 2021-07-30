import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";
import CreateListScreen from "../screens/CreateListScreen";
import ListStackNavigator from "./ListStackNavigator";
import NewListButton from "./NewListButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const Discarded = () => (
  <View>
    <Text>Discarded Screen</Text>
  </View>
);

const ListNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.blue,
      inactiveTintColor: colors.gray,
    }}
  >
    <Tab.Screen
      name="My List"
      component={ListStackNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="format-list-bulleted-square"
            color={color}
            size={20}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Create"
      component={CreateListScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListButton onPress={() => navigation.navigate(routes.CREATE)} />
        ),
      })}
    />
    <Tab.Screen
      name="Discarded"
      component={Discarded}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="delete-sweep-outline"
            color={color}
            size={20}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default ListNavigator;
