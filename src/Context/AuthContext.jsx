import { createContext } from "react";
import React from "react";
const authContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <authContext.Provider
      value={[user, setUser, isAuthenticated, setIsAuthenticated]}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthContextProvider };
