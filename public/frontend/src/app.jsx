import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
// import MyCarousel from "./components/carousel";
import { Showcase } from "./components/showcase";
const App = () => {
  return(
<>
    <Navbar />
    {/* <MyCarousel/> */}
    <Showcase/>
</>
    
  )
  
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
