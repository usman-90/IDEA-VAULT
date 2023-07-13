// import React from "react";
// import { createRoot } from "react-dom/client";
// import SignIn from "./components/signin";
// import Term from "./components/terms";
// import MyCarousel from "./components/carousel";
// import IdeaPoster from "./components/ideaposter";
// import YourIdeas from "./components/yourideas";
// import SignUp from "./components/signup";

/* eslint-disable import/no-unresolved */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import "./pages/ideaform/ideapost.css";
import Layout from "./layout/layout";
import Home from "./pages/homePg/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Idea from "./pages/ideaPG/idea";
import Chatbox from "./pages/chatbox/chatbox";
import BulbCanvas from "./pages/bulb/bulb";
import BasicInfoPage from "./pages/ideaform/basicinfo";
import Content from "./pages/ideaform/content";
import PosterInfo from "./pages/ideaform/posterinfo";
import Settings from "./pages/ideaform/settings";
import YourIdeas from "./components/yourideas";
import Condition from "./components/condition";
import Privacy from "./components/privacypolicy";
import Copyright from "./components/copyright";
import User from "./components/userguide";
import SignUpForm from "./components/signup";
import SignIn from "./components/signin";
import Term from "./components/terms";

const obj = {
  name: "rajja farhan",
  country: "Canada",
  title: "hydra station",
  teamMembers: "usman,zainab",
  description: "this is my description",
  tagline: "give world the more power",
  funding: 500,
  socialsFb: "www.facebook.com",
  insta: "www.instagram.com",
};
const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/idea"
              element={
                <Idea
                  name={obj.name}
                  description={obj.description}
                  title={obj.title}
                  tagline={obj.tagline}
                  country={obj.country}
                  funding={obj.funding}
                  teamMembers={obj.teamMembers}
                />
              }
            />
            <Route path="/inbox" element={<Chatbox />} />
            <Route path="/bulb" element={<BulbCanvas />} />
            <Route path="/basicinfo" element={<BasicInfoPage />} />
            <Route path="/contentinfo" element={<Content />} />
            <Route path="/posterinfo" element={<PosterInfo />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ideasection" element={<YourIdeas />} />
            <Route path="/condition" element={<Condition />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/copyright1" element={<Copyright />} />
            <Route path="/userguide1" element={<User />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/terms" element={<Term />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </Layout>
      </BrowserRouter> */}
      <SignUp/>
    </>
  );
};

export default App;
