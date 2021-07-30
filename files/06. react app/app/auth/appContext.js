import React, { useContext } from "react";

import AppContext from "./context";

export default userContext = () => {
  const { user, setUser, list, setList } = useContext(AppContext);

  const logIn = (user) => {
    setUser(user);
  };

  const register = (user) => {
    setUser(user);
  };

  const logOut = (user) => {};

  return { user, register, logIn, logOut };
};
