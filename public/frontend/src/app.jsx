import "./style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import Login from "./components/loginForm";
const App=()=>{
    return(
        <Navbar></Navbar>
    )
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
