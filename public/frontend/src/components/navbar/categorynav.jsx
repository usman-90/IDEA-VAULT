

import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-2 bg-mustard text-white ">        
        <div className="categorytop_z">
          <ul className="cat-navvv_z">
            <li className="nav-item scale_on_hover">
              <Link className="text-black " to={`/category/3/Technology`}>
                Technology
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to={`/category/8/Business`}>
                Bussiness
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to={`/category/2/Art & Craft`}>
                Arts and Crafts
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to={`/category/4/Education`}>
                Education
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to={`/category/6/Science`}>
                Science
              </Link>
            </li>
            <li className="nav-item scale_on_hover">
              <Link className="text-black" to={`/category/7/Tourism`}>
                Tourism
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
