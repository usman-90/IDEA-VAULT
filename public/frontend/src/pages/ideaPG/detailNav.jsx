import Comment from "../ideaPG/comment";
import Description from "./description";
import "./postedcomment.css"

const DetailNav = () => {
  return (
    <>
      <div className="container">
        <nav style={{backgroundColor:"#07393c",color:"white"}} className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <div className="navbar-nav detailnav">
              <a style={{color:"white"}} className="nav-link active" aria-current="page" href="/">
                Description
              </a>
              <a style={{color:"white"}}  className="nav-link" href="/">
                FAQs
              </a>
              <a style={{color:"white"}}  className="nav-link" href="/">
                Updates
              </a>
              <a style={{color:"white"}} className="nav-link" href="/">
                Comment
              </a>
            </div>
          </div>
        </nav>
      </div>
      <Comment />
      <Description/>

    </>
  );
};
export default DetailNav;
