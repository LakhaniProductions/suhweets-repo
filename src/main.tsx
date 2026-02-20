import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { ScrollToTop } from "../src/shared/utility";

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
