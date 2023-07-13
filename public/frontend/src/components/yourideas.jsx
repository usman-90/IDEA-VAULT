// import "./yourideas.css";
import CardComponent from "./card";
import Navbar2 from "./navbar/navbar2";

const YourIdeas = () => {
  return (
    <div className="container-fluid">
      <div className="navidea_z">
        <Navbar2 />
      </div>
      <div className="ideahead_z">Your ideas</div>
      <div className="container">
        <div className="cardidea_z">
          <CardComponent />
        </div>
      </div>
    </div>
  );
};
export default YourIdeas;
