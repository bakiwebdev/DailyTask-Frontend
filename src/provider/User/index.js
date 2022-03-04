import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setUserData = (data) => {
    setUser(data);
  };
  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
