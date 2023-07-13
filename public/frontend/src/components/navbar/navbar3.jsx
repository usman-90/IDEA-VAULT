import { Link } from "react-router-dom";

const NavbarTerms = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5 bg-mustard text-white">
      <div className="top_z">
        <div className="img-fluid">
          {/* <img src="../images/logo.png" style={{width:100, height:72, backgroundColor:'transparent',float:"left"}}/> */}
        </div>
        <div className="nav1_z">
          <ul className="nav">
            <li className="nav-item scale_on_hover">
              <Link className="text-black " to="/condition">
                Terms and conditions
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/copyright1">
                Copyright Policy
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/userguide1">
                User Guidelines
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTerms;
