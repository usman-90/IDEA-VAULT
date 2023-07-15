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
import YourIdeas from "./pages/yourIdeas/yourideas";
import Condition from "./pages/terms-conditions/condition";
import Privacy from "./pages/terms-conditions/privacypolicy";
import User from "./pages/terms-conditions/userguide";
import Copyright from "./pages/terms-conditions/copyright";
import IdeaPoster from "./pages/ideaposterLanding/ideaposter";
import SignUpForm from "./pages/signup/signup";
import SignIn from "./pages/signin/signin";
import Term from "./pages/terms-conditions/terms";
import Technology from "./pages/Categories/techcat";
import Bussiness from "./pages/Categories/bussinesscat";
import Arts from "./pages/Categories/arts";
import Tourism from "./pages/Categories/tourism";
import Education from "./pages/Categories/education";
import Science from "./pages/Categories/sciencecat";
import AdminLogIn from "./pages/AdminPage/adminlogin";

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
      <BrowserRouter>
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
            <Route path="/signin" element={<SignIn />} />
            <Route path="/ideaposter" element={<IdeaPoster />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/bussiness" element={<Bussiness />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/tourism" element={<Tourism/>} />
            <Route path="/education" element={<Education />} />
            <Route path="/science" element={<Science />} />
            <Route path="/adminlogin" element={<AdminLogIn />} />

            


          </Routes>
        </Layout>
      </BrowserRouter> 
      
    </>
  );
};

export default App;
