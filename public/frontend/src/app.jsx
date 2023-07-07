import React from "react";
import { createRoot } from "react-dom/client";
import MyNavbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyCarousel from "./components/carousel";
import { Showcase } from "./components/showcase";
// import Card from "./components/card";
import Heading from "./components/heading";
import Category from "./components/idea'scategory";
import FAQ from "./components/faq";
import Details from "./pages/details";


const obj={
  name:"rajja farhan",
  country:"Canada",
  title:"hydra station",
  teamMembers:"usman,zainab",
  description:"this is my description",
  tagline:"give world the more power",
  funding:500,
  socialsFb:"www.facebook.com",
  insta:"www.instagram.com"
}
const App = () => {
  return (
    <>
      <MyNavbar />
      {/* <MyCarousel/> */}
      <Showcase />
      <Heading text="Idea's Categories" />
      <Category />

      {/* <Card /> */}
      <Heading text="Frequently Ask Questions"/>
      <FAQ/>
      <Details title={obj.title} description={obj.description} tagline={obj.tagline} name={obj.name} country={obj.country} funding={obj.funding} teamMembers={obj.teamMembers}/>
      
      
    </>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
