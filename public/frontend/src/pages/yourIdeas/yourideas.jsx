import "./yourideas.css";
import MyNavbar from "../../components/navbar/navbar";

const YourIdeas=()=>{
    return(
        <div className="container-fluid_z">
            <div className="navidea_z">
                <MyNavbar/>
            </div>
            <div className="ideahead_z">
                Your ideas
            </div>
            <div className="container">
                <div className="cardidea_z">
                </div>
            </div>
            

        </div>
    );
};
export default YourIdeas;