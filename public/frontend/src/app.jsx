import React from "react";
import { createRoot } from "react-dom/client";
import SignIn from "./components/signin";
import Term from "./components/terms";
import MyCarousel from "./components/carousel";
import IdeaPoster from "./components/ideaposter";
import YourIdeas from "./components/yourideas";
import SignUp from "./components/signup";

import "bootstrap/dist/css/bootstrap.min.css";
// import MyCarousel from "./components/carousel";
import { Showcase } from "./components/showcase";
const App = () => {
  return(
<>
    
    <SignUp/>
</>
    
  )
} 
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
