import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBarMenuProvider } from "./context/SideBarMenuContext";
import { ShoppingContextProvider } from "./context/ShoppingContext";
import { FavoritesContextProvider } from "./context/FavoritesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <SideBarMenuProvider>
    <ShoppingContextProvider>
      <FavoritesContextProvider>
        <Router>
          <App />
        </Router>
      </FavoritesContextProvider>
    </ShoppingContextProvider>
  </SideBarMenuProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
