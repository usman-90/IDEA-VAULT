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
            <Route path="/messages" element={<Chatbox />} />
            <Route path="/bulb" element={<BulbCanvas />} />
            <Route path="/basicinfo" element={<BasicInfoPage />} />
            <Route path="/contentinfo" element={<Content />} />
            <Route path="/posterinfo" element={<PosterInfo />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
