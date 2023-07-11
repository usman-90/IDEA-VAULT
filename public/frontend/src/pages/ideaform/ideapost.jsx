import BasicInfoPage from "./basicinfo.jsx";
import SideBar from "./sidebar.jsx";
import Content from "./content.jsx";
import PosterInfo from "./posterinfo.jsx";
import Settings from "./settings.jsx";
const IdeaPost = () => {
  return (
    <div>
      <SideBar />
      <BasicInfoPage />
      <Content />
      <PosterInfo/>
      <Settings />
    </div>
  );
};

export default IdeaPost;
