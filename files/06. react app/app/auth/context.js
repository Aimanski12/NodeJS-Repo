import React, { useContext, useState } from "react";

const AppContext = React.createContext();

// export function useAppContext() {
//   return useContext(AppContext);
// }

// export function AppContextProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState({ user: "manski" });

//   const value = {
//     currentUser,
//   };

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// }

export default AppContext;
