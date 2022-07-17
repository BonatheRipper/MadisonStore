import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { ContextProvider } from "./context/Statecontext";
function Index() {
  return (
    <div className="component">
      <ContextProvider>
        <App />
      </ContextProvider>
    </div>
  );
}
ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
