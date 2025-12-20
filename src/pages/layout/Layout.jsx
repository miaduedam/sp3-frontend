import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header.jsx";

export default function Layout({
  headers,
  loggedIn,
  login,
  logout,
  username,
  roles,
}) {
  return (
    <>
      <Header
        headers={headers}
        loggedIn={loggedIn}
        login={login}
        logout={logout}
        username={username}
        roles={roles}
      />
      <Outlet />
    </>
  );
}
