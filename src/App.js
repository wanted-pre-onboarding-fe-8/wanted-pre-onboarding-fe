import React from 'react';
import { AuthContextProvider } from './context/AuthContext';
import Router from './Router';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
};

export default App;
