import Header from '../../components/header/Header.jsx'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <Header headers={[{ title: "Home", url: "/" }
      , { title: "Who Said it", url: "/WhoSaidIt" }
      , { title: "All Quotes", url: "/AllQuotes" }
      , { title: "My Score", url: "/MyScore" }
      , { title: "API Documentation", url: "/APIDocumentation"}
    ]}
       />
      <Outlet />
    </>
  )
}

export default App