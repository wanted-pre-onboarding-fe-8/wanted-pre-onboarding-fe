import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from './context/AuthContext';
import Login from './pages/Login';
import Feeds from './pages/Feeds';

export default function Router() {
  const { isLoggedIn } = useAuthState();

  return (
    <Routes>
      <Route
        path={ROUTE_PATH_LOGIN}
        element={<AuthLogin isAuth={isLoggedIn} />}
      />
      <Route
        path={ROUTE_PATH_FEEDS}
        element={<AuthFeeds isAuth={isLoggedIn} />}
      />
    </Routes>
  );
}

function AuthPage({ defaultElement, needNavigate, navigateURL }) {
  if (needNavigate) return <Navigate to={navigateURL} replace />;
  else return defaultElement;
}

function AuthLogin({ isAuth }) {
  return (
    <AuthPage
      defaultElement={<Login />}
      needNavigate={isAuth}
      navigateURL={ROUTE_PATH_FEEDS}
    />
  );
}
function AuthFeeds({ isAuth }) {
  return (
    <AuthPage
      defaultElement={<Feeds />}
      needNavigate={!isAuth}
      navigateURL={ROUTE_PATH_LOGIN}
    />
  );
}
