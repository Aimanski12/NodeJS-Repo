import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
import "react-native-get-random-values";

import AuthNavigation from "./app/navigation/AuthNavigation";
import { auth } from "./app/auth/firebase";
import ListNavigator from "./app/navigation/ListTabNavigator";
import AppContext from "./app/auth/context";

export default function App() {
  const [user, setUser] = useState();
  const [lists, setLists] = useState([]);
  const [discardedLists, setDiscardedLists] = useState([]);

  useEffect(() => {
    LogBox.ignoreLogs(["Setting a timer"]);
    const unsubcribe = auth.onAuthStateChanged((signedUser) => {
      setUser(signedUser);
    });
    return unsubcribe;
  }, []);

  return (
    <AppContext.Provider
      value={{
        discardedLists,
        setDiscardedLists,
        user,
        setUser,
        lists,
        setLists,
      }}
    >
      <NavigationContainer>
        {/* <AuthNavigation /> */}
        {!user ? <AuthNavigation /> : <ListNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}
