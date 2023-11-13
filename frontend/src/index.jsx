import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configuration as oidcConfig } from "./configurations";
import { AuthProvider, useAuth } from "react-auth-verification-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

function onSigninCallback() {
  window.location.href = "/";
}

root.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
