/* eslint-disable import/no-unresolved */
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import Layout from "./layout/layout";
import Home from "./pages/homePg/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Idea from "./pages/ideaPG/idea";
import Chatbox from "./pages/chatbox/chatbox";


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
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
