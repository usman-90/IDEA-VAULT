import "./postedcomment.css";

const DetailNav = ({ changeSection }) => {
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
                className="nav-link active"
                aria-current="page"
              >
                Description
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("faqs");
                }}
                className="nav-link"
                href="/"
              >
                FAQs
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("updates");
                }}
                className="nav-link"
                href="/"
              >
                Updates
              </button>
              <button
                style={{ color: "white" }}
                onClick={() => {
                  changeSection("comment");
                }}
                className="nav-link"
                href="/"
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
