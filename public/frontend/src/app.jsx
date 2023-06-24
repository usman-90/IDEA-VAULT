import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/navbar";
const App = () => {
  return <MyNavbar />;
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
