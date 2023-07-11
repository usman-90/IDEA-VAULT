import Details from "../ideaPG/details";
import DetailNav from "./detailNav";
import Comment from "./comment";
import Description from "./description";
import Update from "./update";
import { useState } from "react";
const Idea = ({
  title,
  description,
  tagline,
  name,
  country,
  funding,
  teamMembers,
}) => {
  const [currSection, setcurrSection] = useState("description");
  const handleSectionChange = (section) => {
    setcurrSection(section);
  };
  return (
    <>
      <Details
        title={title}
        description={description}
        tagline={tagline}
        name={name}
        country={country}
        funding={funding}
        teamMembers={teamMembers}
      />
      <DetailNav currSection={currSection} changeSection={handleSectionChange} />
      <Comment currSection={currSection} />

      <Description currSection={currSection} />
      <Update currSection={currSection} />
    </>
  );
};

export default Idea;
