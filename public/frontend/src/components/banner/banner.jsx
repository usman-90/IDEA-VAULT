import "./banner.css"
import img2 from "../../images/img2.png"
const Banner=()=>{
    return(
        <>
        <div  className="container-fluid banner">
            <div className="row  banner">
                <div className="col-md-8 ">
                    <div className="textbanner px-5">
                    <h2>Unlocking Limitless Innovation</h2>
                    <h3>Welcome to the Idea Vault</h3>
                    <h5 style={{marginTop:"4%"}}> <i  style={{marginRight:"4%"}}className="fa-solid fa-check my-2"></i>Idea Poster</h5>
                    <h5><i  style={{marginRight:"4%"}} className="fa-solid fa-check my-2"></i> Investor</h5>
                    <a href="/">Explore</a>

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