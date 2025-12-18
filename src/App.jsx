import Header from "./components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const headers = [
    { title: "Home", url: "/" },
    { title: "Who Said it", url: "/WhoSaidIt" },
    { title: "All Quotes", url: "/AllQuotes" },
    { title: "My Profile", url: "/MyProfile" },
    { title: "API Documentation", url: "/APIDocumentation" }
  ];

  
  return (
    <>
      <Header headers={headers} />
      <Outlet />
    </>
  );
}

export default App;
