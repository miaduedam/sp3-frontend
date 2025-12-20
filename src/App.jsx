import "./App.css";
import { useState } from "react";
import facade from "./apiFacade.js";
import Layout from "./pages/layout/Layout.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [roles, setUserRoles] = useState("");
  const [username, setUserName] = useState("");

  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      setLoggedIn(true);
      const [usern, rols] = facade.getUsernameAndRoles();
      setUserName(usern);
      setUserRoles(rols);
    });
  };

  const logout = () => {
    setLoggedIn(false);
    facade.logout();
  };

  const publicHeaders = [{ title: "Home", url: "/" }];

  const protectedHeaders = [
    { title: "Who Said it", url: "/WhoSaidIt" },
    { title: "All Quotes", url: "/AllQuotes" },
    { title: "My Profile", url: "/MyProfile" },
    { title: "API Documentation", url: "/APIDocumentation" },
  ];

  //Show protected navigation links only when user is logged in
  const headersToShow = loggedIn
    ? [...publicHeaders, ...protectedHeaders]
    : publicHeaders;

  return (
    <Layout
      headers={headersToShow}
      loggedIn={loggedIn}
      login={login}
      logout={logout}
      username={username}
      roles={roles}
    />
  );
}

export default App;
