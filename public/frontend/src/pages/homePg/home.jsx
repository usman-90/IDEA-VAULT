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
  // console.log(ideadata,"ideadata");
  const reviewsRes = useQuery(["reviews"], fetchReviews);
  console.log(reviewsRes, "reviewsRes from home")

 
  if (reviewsRes.isLoading) {
    console.log("loading reviews");
  }
  if (reviewsRes.isError) {
    console.log("loading reviews");
  }
  const result = ideadata?.data?.data.ideas ?? [];
  // console.log(result,"result");
  const reviews = reviewsRes?.data?.data.feedback ?? [];
  console.log(reviews, "reviews main");


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
          <Link key={index} to={`/ideadetail/${idea._id}`}>
            <IdeaCard
            
              ideaName={idea.ideaTitle}
              ideaCardDesc={idea.cardDescription}
              ideaDate={idea.postedAt}
              ideaCategory={"Technology"}
              cardimage={idea.cardImage}
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
              console.log(review,"Reviewwwww")
            return (
              <ReviewCard
                key={review?.feedbackid ?? ""}
                reviewBody={review?.reviewBody ?? ""}
                name={review?.name ?? ""}
                starCount={review?.starCount ?? ""}
                imgSrc={review.path ?? ""}
              />
            );
          })}
        </SimpleSlider>
      </div>

      <Heading text="Frequently Ask Questions" />
      <FaqSection />
      <div
        style={{ backgroundColor: "" }}
        className="container-fluid bg-light pt-4"
      >
        <Heading text="Contact Us" />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
