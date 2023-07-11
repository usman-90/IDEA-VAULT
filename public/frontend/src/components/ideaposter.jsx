import MyNavbar from "./navbar";
import "../components/ideaposter.css";
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyCarousel from "./carousel";
import YourIdeas from "./yourideas";
const IdeaPoster=()=>{
    return(
        <div className="full_z">
            <div className="container-fluid">
                <div className="navideaposter_z">
                    <Router>
                        <div className="abc_z">
                            <Link to="/ideasection" className="yourideasec_z"> Your Ideas</Link>
                        </div>
                        <Routes>
                            <Route path="/ideasection" element={<YourIdeas />} />
                        </Routes>
                    </Router>
                    <div className="mainnav_z"><MyNavbar/></div>                    
                </div>
                <div className="carousel_z">
                    <MyCarousel/>
                </div>
            </div>
            <div className="container">
                <div className="body_z">
                    <div className="filter_z">
                        <span style={{fontSize:20}}><b>Filter results </b></span> <br/> 
                        <span style={{color:"grey", fontSize:20}}>Category</span><br/>
                        <Router>
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
                        </Router>


                    </div>
                    <div className="category_z">
                        <div className="search_z">
                            <div className="text_z">
                                <input type="text" name="search-category" id="search" placeholder="Search category" className="typeidea_z"></input>
                            </div>
                            <div className="button_z">
                                <button>Search</button>
                                
                            </div>
                        </div>
                        <div className="tech">

                        </div>

                    </div>

                </div>

            </div>
            
            
        </div>
    );
};
export default IdeaPoster;