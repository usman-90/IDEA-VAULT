import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/terms.css';
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Condition from  './condition';
import Privacy from './privacypolicy';
import Copyright from './copyright';
import User from './userguide';
const Term=()=> {

    return(
        <div className="container">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className='top_z'>
                        
                        <div className='img-fluid'>
                            <img src="../images/logo.png" style={{width:100, height:72, backgroundColor:'transparent',float:"left"}}/>
                        </div>
                        <div className='nav1_z'>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/">Terms and conditions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/privacy">Privacy Policy</Link>                 
                                </li>
                                <li className="nav-item">
                                    <Link to="/copyright1">Copyright Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/userguide1">User Guidelines</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Condition />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/copyright1" element={<Copyright/>} />
                    <Route path="/userguide1" element={<User/>} />
                </Routes>
            </Router>
            <div id='content'>
            </div>
                
        </div>
    );
};
export default Term;