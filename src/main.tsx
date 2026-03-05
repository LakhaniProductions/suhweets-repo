import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { GlobalLoadingProvider } from "./context/GlobalLoadingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalLoadingProvider>
        <App />
      </GlobalLoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);
