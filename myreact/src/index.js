import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
import Main from "./login.js/main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Main />
  </React.StrictMode>
);

reportWebVitals();
