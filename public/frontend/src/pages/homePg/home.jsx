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

const reviews = [
  {
    name: "Usman",
    reviewBody:
      "ahhahahahhahhhaskdjkasjd asdjfnajksdnf aksjdfnasjkdnf asjkdfnajksnfdk asjd fjkasdnfjk  jkasdfnk",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    starCount: 3,
  },
  {
    name: "Usman",
    reviewBody:
      "ahhahahahhahhhaskdjkasjd asdjfnajksdnf aksjdfnasjkdnf asjkdfnajksnfdk asjd fjkasdnfjk  jkasdfnk",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    starCount: 4,
  },
  {
    name: "Usman",
    reviewBody:
      "ahhahahahhahhhaskdjkasjd asdjfnajksdnf aksjdfnasjkdnf asjkdfnajksnfdk asjd fjkasdnfjk  jkasdfnk",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    starCount: 5,
  },
  {
    name: "Usman",
    reviewBody:
      "ahhahahahhahhhaskdjkasjd asdjfnajksdnf aksjdfnasjkdnf asjkdfnajksnfdk asjd fjkasdnfjk  jkasdfnk",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    starCount: 5,
  },
  {
    name: "Usman",
    reviewBody:
      "ahhahahahhahhhaskdjkasjd asdjfnajksdnf aksjdfnasjkdnf asjkdfnajksnfdk asjd fjkasdnfjk  jkasdfnk",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
    starCount: 5,
  },
];

const Home = () => {
  const ideadata = useQuery(["idea"], fetchIdea);
  // console.log(ideadata);
  const result = ideadata?.data?.data ?? [];
  console.log(result);

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
          <Link key={index} to={`/ideadetail/${idea.ideaid}`}
          >
            <IdeaCard
              cardSrc={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FuKg3nog0iQGtEKOc_Hdo4nx0Dp0u5x-46o1wBygjA&s"
              }
              ideaName={idea.ideatitle}
              ideaCardDesc={idea.carddescription}
              ideaDate={idea.postedat}
              ideaCategory={"Technology"}
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
                key={review}
                reviewBody={review.reviewBody}
                name={review.name}
                starCount={review.starCount}
                imgSrc={review.imgSrc}
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
