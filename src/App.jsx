import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import facade from "./apiFacade.js";

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
  const headers = [
    { title: "Home", url: "/" },
    { title: "Who Said it", url: "/WhoSaidIt" },
    { title: "All Quotes", url: "/AllQuotes" },
    { title: "My Score", url: "/MyScore" },
    { title: "API Documentation", url: "/APIDocumentation" },
  ];

  return (
    <>
      <Header
        headers={headers}
        loggedIn={loggedIn}
        login={login}
        logout={logout}
      />
      <Outlet />
    </>
  );
}

export default App;
