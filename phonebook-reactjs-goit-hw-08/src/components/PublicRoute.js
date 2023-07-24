import { useAuth } from "../hooks/useAuth";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

const PublicRoute = ({ component, redirectTo }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? component : redirectTo ;
};

export default PublicRoute