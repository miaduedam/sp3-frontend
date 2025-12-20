import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home/Home.jsx";
import WhoSaidIt from "./pages/WhoSaidIt/WhoSaidIt.jsx";
import AllQuotes from "./pages/AllQuotes/AllQuotes.jsx";
import MyProfile from "./pages/MyProfile/MyProfile.jsx";
import ProtectedRoute from "./components/security/ProtectedRoute.jsx";
import APIDocumentation from "./pages/APIDocumentation/APIDocumentation.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          {/*Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="WhoSaidIt" element={<WhoSaidIt />} />
            <Route path="AllQuotes" element={<AllQuotes />} />
            <Route path="MyProfile" element={<MyProfile />} />
            <Route path="APIDocumentation" element={<APIDocumentation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
