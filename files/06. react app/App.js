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
        {!user ? <AuthNavigation /> : <ListNavigator />}
      </NavigationContainer>
    </AppContext.Provider>
  );
}

// REACT_NATIVE_APIKEY=AIzaSyBf7RR0wuqBfvXzNczFz8PeutRef5Lqn60
// REACT_NATIVE_AUTHDOMAIN=todo-app-2d67f.firebaseapp.com
// REACT_NATIVE_PROJECTID=todo-app-2d67f
// REACT_NATIVE_STORAGEBUCKET=todo-app-2d67f.appspot.com
// REACT_NATIVE_MESSAGINGSENDERID=196884964974
// REACT_NATIVE_APPID=1:196884964974:web:df1575c8972439ee37287f
