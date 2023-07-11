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
  return (
    <div>
      <Showcase />
      <Heading text="Idea's Categories" />
      <Category />

      <Heading text="Frequently Ask Questions" />
      <FaqSection />
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
      <Banner/>
      <Contact />
      <SimpleSlider>
        <IdeaCard
          cardSrc={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FuKg3nog0iQGtEKOc_Hdo4nx0Dp0u5x-46o1wBygjA&s"
          }
          ideaName={"Flying Laptop"}
          ideaCardDesc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cumque quos ullam hic suscipit, illo itaque praesentium odio fugiat quibusdam molestiae adipisci voluptatem fugit optio culpa, provident, facere error sit."
          }
          ideaDate={"7 / 7 /23"}
          ideaCategory={"Technology"}
        />
        <IdeaCard />
        <IdeaCard />
        <IdeaCard />
      </SimpleSlider>
    </div>
  );
};

export default Home;
