import React, { createContext, useState } from "react";
 export  const AuthContext = createContext();
 export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = (data) => {
    const { accessToken, refreshToken } = data;

    const user = { username: data.username, email: data.email };

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUser(user);

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

