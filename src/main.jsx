import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppFetchProvider } from "./context/AppFetchProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppFetchProvider>
      <App />
    </AppFetchProvider>
  </React.StrictMode>
);
