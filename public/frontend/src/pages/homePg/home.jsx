import Showcase from "../../components/bgVideo/showcase";
import Heading from "../../components/headin/heading";
import Category from "./idea'scategory";
import FaqSection from "../../components/faq/faq";
import React from "react";
import SimpleSlider from "../../components/owlcarousel/owlcarousel.jsx";
import Contact from "../../components/contactus/contact";
import IdeaCard from "../../components/ideacard/ideacard";
import ReviewCard from "../../components/reviewcard/reviewcard";
import Banner from "../../components/banner/banner";
import { useQuery } from "@tanstack/react-query";
import fetchIdea from "../../function2/fetchidea";
import { Link } from "react-router-dom";
import { fetchReviews } from "../../functions/fetchreviews";

const Home = () => {
  const ideadata = useQuery(["idea"], fetchIdea);
  const reviewsRes = useQuery(["reviews"], fetchReviews);
 
  if (reviewsRes.isLoading) {
    console.log("loading reviews");
  }
  if (reviewsRes.isError) {
    console.log("loading reviews");
  }
  const result = ideadata?.data?.data ?? [];
  console.log(result);
  const reviews = reviewsRes?.data?.data ?? [];


  return (
    <div>
      <Showcase />
      <div
        style={{ backgroundColor: "#daeaf0" }}
        className="container-fluid py-3"
      >
        <Heading text="Idea's Categories" />
      </div>
      <Category />
      <Banner />

      <Heading
        style={{ margintop: "3rem" }}
        className="my-5"
        text="Our top 10 Ideas"
      />

      <SimpleSlider>
        {result.map((idea, index) => (
          <Link key={index} to={`/ideadetail/${idea?.ideaid}`}>
            <IdeaCard
            
              ideaName={idea?.ideatitle}
              ideaCardDesc={idea?.carddescription}
              ideaDate={idea?.postedat}
              ideaCategory={"Technology"}
              cardimage={idea?.path}
            />
          </Link>
        ))}
      </SimpleSlider>

      <div style={{ backgroundColor: "#daeaf0" }}>
        <Heading text="Feedbacks" />
      </div>

      <div style={{ backgroundColor: "#daeaf0", paddingBottom: "4rem" }}>
        <SimpleSlider>
          {reviews.map((review) => {
            return (
              <ReviewCard
                key={review?.feedbackid ?? ""}
                reviewBody={review?.reviewbody ?? ""}
                name={review?.name ?? ""}
                starCount={review?.starcount ?? ""}
                imgSrc={review.path ?? ""}
              />
            );
          })}
        </SimpleSlider>
      </div>

      <Heading text="Frequently Ask Questions" />
      <FaqSection />
      <div
        style={{ backgroundColor: "#daeaf0" }}
        className="container-fluid py-1"
      >
        <Heading text="Contact Us" />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
