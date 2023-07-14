import Navbar2 from "../../components/navbar/navbar2";
import "./ideaposter.css";
import IdeaCard from "../../components/ideacard/ideacard";
import { Link } from "react-router-dom";
import MyCarousel from "./carousel";
const IdeaPoster = () => {
  return (
    <div className="full_z">
      <div className="container-fluid shareideas_z">
        <div className="navideaposter_z">
          <div className="abc_z">
            <Link to="/ideasection" className="yourideasec_z">
              {" "}
              Your Ideas
            </Link>
          </div>

          <div className="mainnav_z">
            <Navbar2 />
          </div>
        </div>
        <div className="carousel_z">
          <MyCarousel />
        </div>
      </div>
      <div className="container idea1_z">
        <div className="body_z">
          <div className="filter_z">
            <span style={{ fontSize: 20 }}>
              <b>Filter results </b>
            </span>{" "}
            <br />
            <span style={{ color: "grey", fontSize: 20 }}>Category</span>
            <br />
            <ul className="list-unstyled">
              <li>
                <Link to="/technology">Tech and Innovation</Link>
              </li>
              <li>
                <Link to="/healthcare">Health Care</Link>
              </li>
              <li>
                <Link to="/food">Food and Beverage</Link>
              </li>
              <li>
                <Link to="/education">Education and Training</Link>
              </li>
            </ul>
          </div>
          <div className="category_z">
            <div className="search_z">
              <div className="text_z">
                <input
                  type="text"
                  name="search-category"
                  id="search"
                  placeholder="Search category"
                  className="typeidea_z"
                ></input>
              </div>
              <div className="button_z">
                <button>Search</button>
              </div>
            </div>
            <div className="tech">
              <IdeaCard/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IdeaPoster;
