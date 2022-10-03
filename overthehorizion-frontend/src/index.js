import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import OTH from "./OverTheHorizon";
import reportWebVitals from "./utils/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OTH />
  </React.StrictMode>
);

reportWebVitals();
