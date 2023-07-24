import { Route, Routes, Navigate } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";
import { Suspense, lazy, useEffect } from "react";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import Loader from "./Loader/Loader";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isRefreshing } = useAuth();

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                component={<RegisterPage />}
                redirectTo={<Navigate to="/contacts" replace />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                redirectTo={<Navigate to="/contacts" replace />}
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo={<Navigate to="/login" replace />}
                component={<ContactsPage />}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
