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
  // console.log(ideaResult, "ideaResult");
  const updates = useQuery(["updates", ideaid], fetchIdeaUpdates);
  // console.log(updates, "updates");
  const visiblityRes = useQuery( ["checkVis", userid, ideaid],checkUserVisiblity);
  const commentsRes = useQuery(["comments", ideaid], fetchComments);
  console.log("commentsRes", commentsRes);
  const commentsData = commentsRes?.data?.data?.comments ?? [];
  console.log(commentsData, "commentsData");
  const visData = visiblityRes?.data?.row;
  if (ideaResult.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  if (updates.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );}
  const data = ideaResult?.data?.data.idea ?? [];
  const updatesdata = updates?.data?.data.updates ?? [];
  console.log(data,"data of idea");
  // console.log(updatesdata,"updatesdata");

  const handleSectionChange = (section) => {
    setcurrSection(section);
  };
  return (
    <>
      <Details
        images={data?.otherImages ?? ""}
        title={data?.ideaTitle ?? ""}
        tagline={data?.ideaTagline ?? ""}
        name={"Rajja "}
        country={ "Canada"}
        funding={data?.requiredamount ?? ""}
        teamMembers={"usman "}
        ideaid={data._id}
        userid={data?.userid ?? ""}
        path={ "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000"}
      />
       <DetailNav
        currSection={currSection}
        changeSection={handleSectionChange}
      />

      <Comment
        commentsData={commentsData}
        currSection={currSection}
        path={ "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000"}
      />

      <Description
        currSection={currSection}
        description={data?.detaileddescription ?? ""}
        ideaid={data._id}
        visiblity={data?.visiblity ?? ""} 
        visData={"visData"} //?? where is visData
        userId={data?.userid ?? ""} 
        
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
