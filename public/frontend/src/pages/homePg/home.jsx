import Showcase from "../../components/bgVideo/showcase";
import Heading from "../../components/headin/heading";
import Category from "./idea'scategory";
import FaqSection from "../../components/faq/faq";
const Home = () => {
  return (
    <>
      <Showcase />
      <Heading text="Idea's Categories" />
      <Category />
      <Heading text="Frequently Ask Questions" />
      <FaqSection />
      
    </>
  );
};

export default Home;
