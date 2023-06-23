import 'bootstrap/dist/css/bootstrap.css';

const Navbar=()=>{
    return(
        <div id="mainNavigation">
        <nav role="navigation">
          <div className="py-3 text-center border-bottom">
            <img src="..\images\logo.png" alt="" className="invert logo"/> 
          </div>
        </nav>
        <div className="navbar-expand-md">
          <div className="navbar-dark text-center my-2">
            <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> <span className="align-middle f-green">Menu</span>
            </button>
          </div>
          <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item">
                <a className="nav-link active f-green" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link f-green" href="/">Book Hotel</a>
              </li>

              <li className="nav-item">
                <a className="nav-link f-green" href="/">Destinations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link f-green" href="/">Policy</a>
              </li>
              <li className="nav-item dropdown">
                {/* <a className="nav-link dropdown-toggle f-green" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  <span className='f-green'>
                  Company
                  </span>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="/">Blog</a></li>
                  <li><a className="dropdown-item" href="/">Contact us</a></li>
                  <li><a className="dropdown-item" href="/">About Us</a></li>
                </ul> */}
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
};
export default Navbar;