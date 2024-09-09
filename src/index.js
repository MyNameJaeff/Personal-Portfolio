import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <p id="phone">Please open on desktop</p>
    <p id="phone">for the best experience, as i yet have done the css for phone viewing!</p>

    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
