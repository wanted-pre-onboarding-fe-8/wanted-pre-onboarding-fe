import React from 'react';
import { setItem, getItem, removeItem } from '../utils/helpers/storage';

const defaultContext = {
  isLoggedIn: false,
  userId: '',
  login: () => {},
  logout: () => {},
};

const AuthContext = React.createContext(defaultContext);

const STORAGE_IS_LOGGED_IN = 'isLoggedIn';
const STORAGE_USER_ID = 'userId';

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    !!getItem(STORAGE_IS_LOGGED_IN)
  );
  const [userId, setUserId] = React.useState('');

  const login = (id) => {
    setItem(STORAGE_IS_LOGGED_IN, true);
    setItem(STORAGE_USER_ID, id);
    const token = getItem(STORAGE_IS_LOGGED_IN);
    const userId = getItem(STORAGE_USER_ID);
    setIsLoggedIn(token);
    setUserId(userId);
  };

  const logout = () => {
    removeItem(STORAGE_IS_LOGGED_IN);
    removeItem(STORAGE_USER_ID);
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, login, logout, userId };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, AuthContext };
