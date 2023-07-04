import React from "react";
import { createRoot } from "react-dom/client";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyCarousel from "./components/carousel";
import { Showcase } from "./components/showcase";
const App = () => {
  return(
<>
    <MyNavbar />
    {/* <MyCarousel/> */}
    <Showcase/>
</>
    
  )
} 
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
