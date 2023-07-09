import Details from "../ideaPG/details";
import DetailNav from "./detailNav";

const Idea = ({
  title,
  description,
  tagline,
  name,
  country,
  funding,
  teamMembers,
}) => {
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
      <DetailNav />
      
    </>
  );
};

export default Idea;
