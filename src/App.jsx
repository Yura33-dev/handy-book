import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { selectIsLoggedIn, selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import TemporaryDrawer from './components/Drawer/Drawer';

function App() {
  const [activeSideBar, setActiveSideBar] = useState(false);

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const toggleSideBar = () => setActiveSideBar(active => !active);

  return isRefreshing ? (
    <div>Refreshing user...</div>
  ) : (
    <Layout onCloseSideBar={toggleSideBar}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>

      {isLoggedIn && (
        <TemporaryDrawer
          isActive={activeSideBar}
          onCloseSideBar={toggleSideBar}
        />
      )}
    </Layout>
  );
}

export default App;
