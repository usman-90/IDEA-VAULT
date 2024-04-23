import "./banner.css"
import img2 from "../../images/img2.png"
import { Link } from "react-router-dom";
const Banner=()=>{
    return(
        <>
        <div style={{backgroundColor:"#daeaf0"}} className="container-fluid banner ">
            <div className="row  banner">
                <div className="col-md-8 ">
                    <div className="textbanner px-5">
                    <h2>Unlocking Limitless Innovation</h2>
                    <h3 className="text-mustard">Welcome to the Idea Vault</h3>
                    <h5 style={{marginTop:"4%"}}> <i  style={{marginRight:"4%"}}className="fa-solid fa-check my-2"></i>Idea Poster</h5>
                    <h5><i  style={{marginRight:"4%"}} className="fa-solid fa-check my-2"></i> Investor</h5>
                 <Link to={"./aboutus"}>Explore</Link>

                    </div>
                </div>
                <div className="col-md-4 bannerimg">
                    <img   src={img2}alt="uu" />
                    
                </div>
            </div>
            
        </div>
        </>

    );
}
export default Banner;
