import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigation from "./app/navigation/AuthNavigation";
import ListNavigator from "./app/navigation/ListTabNavigator";
import AppContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState({
    name: "aimanski",
    email: "a@mail.co",
    password: "12341234",
  });
  const [list, setList] = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, list, setList }}>
      <NavigationContainer>
        {!user ? <AuthNavigation /> : <ListNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}
