/* eslint-disable jsx-a11y/aria-role */
import MyCircularProgress from "../../components/circlecount/progreebar";
import Flipcard from "../../components/flipcard/flipcard";
import Heading from "../../components/headin/heading";
import "../aboutUs/aboutus.css"
// import CategoryCard from "../homePg/categorycard";
// import {usman} from "../../images/usman.jfif"
const AboutUs=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="container-fluid aboutusdiv">
                   <div className="text-aboutus">
                    <h3 className="aboutus-heading-r">ABOUT US</h3>
                    <h5 className="aboutus-heading-r2">Unleash Your Ideas: Connecting Visionaries with Idea Vault</h5>
                   </div>

                </div>
            </div>
            <div className="row row2-aboutus">
            
                <div className="col-md-6">
                    <div style={{justifyContent:"center",flexDirection:"column",height:"30rem",marginLeft:"5%"}} className="container d-flex">
                        <h2 style={{color:"#07393c",fontSize:"3em"}}>What We Do?</h2>
                        <p style={{fontSize:"1em"}}>
                        Idea Vault is an innovative platform designed to empower individuals to share, explore, and collaborate on business ideas. It serves as a secure repository where visionaries can deposit their creative concepts, seeking funding, partners, or feedback. By connecting idea posters with potential investors and collaborators, Idea Vault fosters a dynamic ecosystem that fuels the growth of infuture groundbreaking ventures.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{height:"30rem",width:"40rem"}} className="img-fluid"src="https://img.freepik.com/free-vector/vector-paper-light-bulb-with-gears-cogs-business-interaction-concept_1284-42534.jpg?size=626&ext=jpg&uid=R108170360&ga=GA1.2.2119452134.1687518382&semt=sph" alt="oo" />
                </div>
                <div className="col-md-12">
                    <div>
                        <Heading text="our team"/>

                    </div>
                </div>
               

                
                <div  style={{marginLeft:"0%"}}className="col-md-4 ">
                   <Flipcard src={"https://img.freepik.com/free-vector/vector-paper-light-bulb-with-gears-cogs-business-interaction-concept_1284-42534.jpg?size=626&ext=jpg&uid=R108170360&ga=GA1.2.2119452134.1687518382&semt=sph"} role={"Usman Siddiqui"} name={"Usman Siddiqui"} prof={"Mern stack developer"} desc={"Usman Siddiqui is an undergraduate software engineer whose dedication and enthusiasm for technology are evident in his work as a MERN stack developer With his relentless pursuit of excellence and a keen eye for detail, he brings a fresh perspective and valuable skills to Idea Vault. As an aspiring software engineer, Usman's commitment to continuous learning and staying at the forefront of the latest industry trends enriches the development process."}/>
                </div>
                <div className="col-md-4">
                   <Flipcard src={"https://img.freepik.com/free-vector/vector-paper-light-bulb-with-gears-cogs-business-interaction-concept_1284-42534.jpg?size=626&ext=jpg&uid=R108170360&ga=GA1.2.2119452134.1687518382&semt=sph"} role={"Rajja Farhan"} name={"Rajja Farhan"} prof={"Mern stack developer"} desc={"Rajja Farhan is a remarkable individual known for her exceptional work ethic and incredible talent in the field of UI and design. As a hardworking professional, she consistently delivers outstanding results by combining her creativity with a keen understanding of user experience. Rajja's ability to generate superb and smart ideas sets her apart, enabling her to contribute valuable insights and innovative solutions to various projects."}/>
                </div>
                <div className="col-md-4">
                   <Flipcard src={"https://img.freepik.com/free-vector/vector-paper-light-bulb-with-gears-cogs-business-interaction-concept_1284-42534.jpg?size=626&ext=jpg&uid=R108170360&ga=GA1.2.2119452134.1687518382&semt=sph"} role={"Zainab Iman"} name={"Zainab Iman"} prof={"Frontend developer"} desc={"Zainab Iman is a talented and smart worker, specializing in frontend development. Her passion for creating visually captivating and interactive user interfaces is evident in her exceptional work. With a strong focus on frontend technologies, Zainab brings a unique blend of creativity and technical expertise to the team.Zainab's ability to effectively communicate and brainstorm ideas further enhances the team's synergy and problem-solving capabilities."}/>
                </div>
                <div className="col-md-12">
                    <div>
                        <Heading text="our COllaboration"/>


                    </div>
                    <div className="container d-flex">

                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className="col-md-4">
                        <MyCircularProgress totalCount={2000}/>
                        <h4 style={{color:"#07939c"}}>Investment on Ideavault</h4>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className="col-md-4">
                        <MyCircularProgress totalCount={700}/>
                        <h4 style={{color:"#07939c"}}>Users on Ideavault</h4>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} className="col-md-4">
                        <MyCircularProgress totalCount={50}/>
                        <h4 style={{color:"#07939c"}}>Ideas on Ideavault</h4>
                    </div>

                    </div>
                   
                </div>
               

                
              

            </div>
            
                
         
        </div>
        </>
    );
}
export default AboutUs;