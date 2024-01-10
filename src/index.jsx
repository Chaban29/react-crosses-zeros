import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App/App";
import './assets/main.scss';


const rootEl = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootEl);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
