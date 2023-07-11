import MyCarousel from "./carousel";
import "../components/yourideas.css";
import CardComponent from "./card";
import MyNavbar from "./navbar";

const YourIdeas=()=>{
    return(
        <div className="container-fluid">
            <div className="navidea_z">
                <MyNavbar/>
            </div>
            <div className="ideahead_z">
                Your ideas
            </div>
            <div className="container">
                <div className="cardidea_z">
                    <CardComponent/>
                </div>
            </div>
            

        </div>
    );
};
export default YourIdeas;