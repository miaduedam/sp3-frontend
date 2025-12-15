import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import WhoSaidIt from "./pages/WhoSaidIt";
import AllQuotes from "./pages/AllQuotes";
import MyScore from "./pages/MyScore";
import APIDocumentation from "./pages/APIDocumentation";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Layout route /}
        <Route path="/" element={<App />}>

          {/ Child routes rendered inside <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="WhoSaidIt" element={<WhoSaidIt />} />
          <Route path="AllQuotes" element={<AllQuotes />} />
          <Route path="MyScore" element={<MyScore />} />
          <Route path="APIDocumentation" element={<APIDocumentation />} />

        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);