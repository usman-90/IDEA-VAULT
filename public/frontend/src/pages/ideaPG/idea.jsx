import Details from "../ideaPG/details";
import DetailNav from "./detailNav";
import Comment from "./comment";
import Description from "./description";
import Update from "./update";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchOneIdea } from "../../functions/fetchoneidea";
import { fetchIdeaUpdates } from "../../functions/fetchcomments";
import { checkCookieExists, getCookie } from "../../helpers/cookies";
// import { checkUserVisiblity } from "../../functions/visinlity";
const Idea = () => {
  let userid;
  if (checkCookieExists("logindata")) {
    userid = JSON.parse(getCookie("logindata")).userId;
  }
  const [visiblity, setvisiblity] = useState();
  const [currSection, setcurrSection] = useState("description");
  const { ideaid } = useParams();
  const ideaResult = useQuery(["getidea", ideaid], fetchOneIdea);
  const updates = useQuery(["updates", ideaid], fetchIdeaUpdates);

  const updatesdata = updates?.data?.data;
  if (ideaResult.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const data = ideaResult?.data?.data ?? [];
  
  let vis;
  const hanldevisiblity = (a) => {
    if (a) {
      vis= true
    }
    if (!a) {
      vis = false
    }
  };
  useEffect(() => {
    hanldevisiblity(data?.idearow[0]?.visiblity)
  }, [data]);

  const handleSectionChange = (section) => {
    setcurrSection(section);
  };
  console.log(visiblity);
  return (
    <>
      <Details
        title={data?.idearow[0]?.ideatitle ?? ""}
        tagline={data?.idearow[0]?.ideatagline ?? ""}
        name={data?.idearow[0]?.name ?? ""}
        country={data?.idearow[0]?.country ?? ""}
        funding={data?.idearow[0]?.requiredamount ?? ""}
        teamMembers={data?.idearow[0]?.state ?? ""}
        ideaid={ideaid}
      />
      <DetailNav
        currSection={currSection}
        changeSection={handleSectionChange}
      />
      <Comment currSection={currSection} />

      <Description
        currSection={currSection}
        description={data?.idearow[0]?.detaileddescription ?? ""}
      />
      <Update
        updatesdata={updatesdata}
        currSection={currSection}
        ideaid={ideaid}
      />
    </>
  );
};

export default Idea;
