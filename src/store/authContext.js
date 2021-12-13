import { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext({
  authData: {},
  setAuthData() {},
  isLoggedIn: false,
  login() {},
  logout() {},
});

export const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(
    JSON.parse(localStorage.getItem("authData")) || {
      username: null,
      token: null,
    }
  );
  const isLoggedIn = !!authData.token;

  const login = (token, username) => {
    setAuthData((s) => ({
      ...s,
      username: username,
      token: token,
    }));
    toast.success("Logged in");
    return true;
  };

  useEffect(() => {
    localStorage.setItem("authData", JSON.stringify(authData));
  }, [authData]);

  const logout = () => {
    setAuthData((s) => ({ ...s, username: null, token: null }));
    localStorage.removeItem("authData");
    toast.success("Logged Out");
  };

  return (
    <AuthContext.Provider
      value={{ authData, isLoggedIn, setAuthData, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthCtx = () => useContext(AuthContext);
