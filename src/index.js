import React from "react";
import "./index.css";
import { StateContext } from "./Context/StateContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateContext>
      <RouterProvider router={router}>
        <Router>
          <App />
        </Router>
      </RouterProvider>
    </StateContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
