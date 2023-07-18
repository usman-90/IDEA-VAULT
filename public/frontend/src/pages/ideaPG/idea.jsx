import Details from "../ideaPG/details";
import DetailNav from "./detailNav";
import Comment from "./comment";
import Description from "./description";
import Update from "./update";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchOneIdea } from "../../functions/fetchoneidea";
import { fetchComments, fetchIdeaUpdates } from "../../functions/fetchcomments";
import { checkCookieExists, getCookie } from "../../helpers/cookies";
import { checkUserVisiblity } from "../../functions/visinlity";
const Idea = () => {
  let userid;
  if (checkCookieExists("logindata")) {
    userid = JSON.parse(getCookie("logindata")).userId;
  }
  const [currSection, setcurrSection] = useState("description");
  const { ideaid } = useParams();
  const ideaResult = useQuery(["getidea", ideaid], fetchOneIdea);
  const updates = useQuery(["updates", ideaid], fetchIdeaUpdates);
  const visiblityRes = useQuery(
    ["checkVis", userid, ideaid],
    checkUserVisiblity
  );
  const commentsRes = useQuery(["comments", ideaid], fetchComments);
  const commentsData = commentsRes?.data;
  console.log(commentsData);
  const visData = visiblityRes?.data?.row;
  if (ideaResult.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const data = ideaResult?.data?.data ?? [];
  const updatesdata = updates?.data?.data ?? [];
  console.log(data);

  const handleSectionChange = (section) => {
    setcurrSection(section);
  };
  return (
    <>
      <Details
        images={data?.ideaimagesrow}
        title={data?.idearow[0]?.ideatitle ?? ""}
        tagline={data?.idearow[0]?.ideatagline ?? ""}
        name={data?.idearow[0]?.name ?? ""}
        country={data?.idearow[0]?.country ?? ""}
        funding={data?.idearow[0]?.requiredamount ?? ""}
        teamMembers={data?.idearow[0]?.state ?? ""}
        ideaid={ideaid}
        userid={data?.idearow[0]?.userid ?? ""}
        path={data?.idearow[0]?.userid ?? ""}
      />
      <DetailNav
        currSection={currSection}
        changeSection={handleSectionChange}
      />
        
      <Comment commentsData={commentsData} currSection={currSection}  path={data?.idearow[0]?.userid ?? ""}/>

      <Description
        currSection={currSection}
        description={data?.idearow[0]?.detaileddescription ?? ""}
        ideaid={ideaid}
        visiblity={data?.idearow[0]?.visiblity ?? ""}
        visData={visData}
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
