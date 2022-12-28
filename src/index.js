import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./CSS/global.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RoutesPage from "./Components/RoutesPage";
import { ThemeProvider } from "react-bootstrap";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <RoutesPage />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
