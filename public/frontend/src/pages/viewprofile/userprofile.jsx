import Userprofiledetail from "./userprofiledetails";

const UserprofileNav=()=>{
    return(<>
        <div className="container my-3">
        <nav
          style={{ backgroundColor: "#2c666e", color: "white" }}
          className="navbar navbar-expand-lg "
        >
          <div className="container-fluid">
            <div className="navbar-nav detailnav">
              <button
                style={{ color: "white" }}
                
                className= "nav-link"
                aria-current="page"
              >
                <i className="fa-regular fa-eye mx-2"></i>
                View Profile
              </button>
              <button
                style={{ color: "white" }}
                
                className= "nav-link"
              ><i className="fa-solid fa-pen-to-square mx-2"></i>
                Edit Profile
              </button>
            
              
            </div>
          </div>
        </nav>
      </div>
        </>

    );

};



const UserProfile=()=>{
    return(
        <>
        <UserprofileNav/>
        <Userprofiledetail/>
        </>

    );
};
export default UserProfile