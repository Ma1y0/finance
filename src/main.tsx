import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SavingsCalculator from "./SavingsCal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="navbar bg-base-100">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Balance
        </Link>
        <Link to={"/savings"} className="btn btn-ghost text-xl">
          Savings Calculator
        </Link>
        <Link to={"/graph"} className="btn btn-ghost text-xl">
          Graph
        </Link>
      </div>
      <Routes>
        <Route path="/" Component={App} />
        <Route path="/savings" Component={SavingsCalculator} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
