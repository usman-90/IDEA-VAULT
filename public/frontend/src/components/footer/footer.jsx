import React from "react";
import "./footer.css";
import logo from '../../images/BULBLOGO.png'

const Footer = () => {
  return (
    <div className="footer-clean anim  my-2">
      <footer className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 items">
              <h3 style={{fontSize:"2rem",fontWeight:"3rem"}} className="f-caprasimo text-white"> IDEA <span className="text-mustard f-caprasimo">VAULT</span></h3>
              <ul>
                
              <li  style={{fontSize:"1rem",color:"white",fontWeight:"4rem"}}> <a href="/">Your Idea Oasis - Idea Vault</a></li>

                <li><a href="/"><img style={{height:"7rem",width:"50%"}} src={logo} alt="" /></a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 items">
              <h3>HOME</h3>
              <ul>
                <li><a href="/">Idea Poster</a></li>
                <li><a href="/">Investor</a></li>
                <li><a href="/">Top 10 Ideas</a></li>
                <li><a href="/">Socials</a></li>
                <li><a href="/">Reviews</a></li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 items">
              <h3>IDEA&apos;S CATEGORY</h3>
              <ul>
                <li><a href="/">Education</a></li>
                <li><a href="/">Science </a></li>
                <li><a href="/">Art & Craft</a></li>
                <li><a href="/">Technology</a></li>
                <li><a href="/">Buisness</a></li>
                <li><a href="/">Travel</a></li>
              </ul>
            </div>
            <div className="col-lg-3 items socials">
              <a href="/"><i style={{color:"blue"}} className="fa-brands fa-facebook"></i></a>
              <a href="/"><i style={{color:"red"}} className="fa-brands fa-instagram"></i></a>
              <a href="/"><i style={{color:"yellow"}} className="fa-brands fa-snapchat"></i></a>
              <a href="/"><i style={{color:"blue"}} className="fa-brands fa-twitter"></i></a>
              <p  style={{fontSize:"1.2rem"}}className="copyright">Idea Vault © 2023</p>
              <p  style={{fontSize:"1.2rem"}}className="copyright">Copy Rights Reserved </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
