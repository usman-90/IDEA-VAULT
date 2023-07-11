import "./postedcomment.css";

const DetailNav = ({ changeSection, currSection }) => {
  return (
    <>
      <div className="container">
        <nav
          style={{ backgroundColor: "#07393c", color: "white" }}
          className="navbar navbar-expand-lg "
        >
          <div className="container-fluid">
            <div className="navbar-nav detailnav">
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("description");
                }}
                className={`${
                  currSection == "description" ? "fw-bold" : ""
                } nav-link`}
                aria-current="page"
              >
                Description
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("faqs");
                }}
                className={`${
                  currSection == "faqs" ? "fw-bold" : ""
                }  nav-link`}
              >
                FAQs
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("updates");
                }}
                className={`${
                  currSection == "updates" ? "fw-bold" : ""
                }  nav-link`}
              >
                Updates
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("comment");
                }}
                className={`${
                  currSection == "comment" ? "fw-bold" : ""
                }  nav-link`}
              >
                Comment
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default DetailNav;
