import "./yourideas.css";
import IdeaCard from "../../components/ideacard/ideacard";
import Banner from "../../components/banner/banner";
import UserprofileNav from "../viewprofile/userProfileNav";
import { useParams } from "react-router-dom";
import { getIdeasByUserId } from "../../functions/votes";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const YourIdeas = () => {
  const { userid } = useParams();
  console.log(userid);
  const ideasRes = useQuery(["useridea", userid], getIdeasByUserId);
  if (ideasRes.isLoading) {
    console.log("user ideas laoding");
  }
  const userideas = ideasRes?.data?.row;
  console.log(userideas);
  return (
    <div>
      <UserprofileNav />
      <div className="ideahead_z" style={{ marginBottom: 20, marginTop: 30 }}>
        Your ideas
      </div>
      <Banner />
      <div className=" container-fluid containerSet_z">
        <div className="cardidea_z">
          {userideas?.map((idea, ideaIndex) => (
            <Link key={ideaIndex} to={`/ideadetail/${idea.ideaid}`}>
              <IdeaCard
                ideaName={idea?.ideatitle}
                ideaCardDesc={idea?.carddescription}
                cardSrc={idea?.path}
                ideaDate={idea?.postedat}
                cardimage={idea?.path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default YourIdeas;
