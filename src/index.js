import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvier } from "./context/authContext";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvier>
    <App />
  </AuthContextProvier>
);
