import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import LogIn from "./components/security/LogIn.jsx"
import facade from "./apiFacade.js";
import LoggedIn from "./components/security/LoggedIn.jsx";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [roles, setUserRoles] = useState('');
  const [username, setUserName] = useState('');

  const login = (user, pass) => {
    facade.login(user,pass)
    .then(() =>setLoggedIn(true));
    const [username, roles] = facade.getUsernameAndRoles();
    setUserRoles(roles);
    setUserName(username);
    
  }

   const logout = () => {
    setLoggedIn(false);
    facade.logout();
  }
  const headers = [
    { title: "Home", url: "/" },
    { title: "Who Said it", url: "/WhoSaidIt" },
    { title: "All Quotes", url: "/AllQuotes" },
    { title: "My Score", url: "/MyScore" },
    { title: "API Documentation", url: "/APIDocumentation" }
  ];

  return (
    <>
      <Header headers={headers} />
      <Outlet />

      <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn loggedIn={loggedIn} />
          <button onClick={logout}>Logout</button>
          <h2>Username: {username}</h2>
          <p>{roles}</p>
        </div>)}
    </div>
    </>
  );
}

export default App;
