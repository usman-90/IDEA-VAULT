import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout/layout";
import Home from "./pages/homePg/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Idea from "./pages/ideaPG/idea";

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
