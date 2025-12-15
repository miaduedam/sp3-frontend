import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home.jsx";
import WhoSaidIt from "./pages/WhoSaidIt/WhoSaidIt.jsx";
import AllQuotes from "./pages/AllQuotes/AllQuotes.jsx";
import MyScore from "./pages/MyScore/MyScore.jsx";
import APIDocumentation from "./pages/APIDocumentation/APIDocumentation.jsx";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<App />}>
          {/* Child routes rendered inside <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="WhoSaidIt" element={<WhoSaidIt />} />
          <Route path="AllQuotes" element={<AllQuotes />} />
          <Route path="MyScore" element={<MyScore />} />
          <Route path="APIDocumentation" element={<APIDocumentation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
