import "./yourideas.css";
import IdeaCard from "../../components/ideacard/ideacard";
import Navbar2 from "../../components/navbar/navbar2";

const YourIdeas = () => {
  return (
    <div className="container-fluid yourideas_z">
      <div className="navidea_z">
        <Navbar2 />
      </div>
      <div className="ideahead_z">Your ideas</div>
      <div className="container">
        <div className="cardidea_z">
          <IdeaCard />
        </div>
      </div>
    </div>
  );
};
export default YourIdeas;
