import { Navigate, Outlet } from "react-router-dom";
import facade from "../../apiFacade";

//protect routes by checking login status via the apifacade,
// if the user is logged in -> render routes, if not redirect to homePage
export default function ProtectedRoute() {
  return facade.loggedIn() ? <Outlet /> : <Navigate to="/" replace />;
}
