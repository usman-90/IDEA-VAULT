

import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-5 bg-mustard text-white ">        
        <div className="categorytop_z">
          <ul className="cat-navvv_z">
            <li className="nav-item scale_on_hover">
              <Link className="text-black " to="/technology">
                Technology
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/bussiness">
                Bussiness
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/arts">
                Arts and Crafts
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/education">
                Education
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to="/tourism">
                Tourism
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
