import React from 'react';

const Showcase = () => {

  return (
    <>
    <section className="showcase">
      
      <video src="../images/video.mp4" muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h2>Never Stop To</h2>
        <h3>Exploring The World</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <a href="/">Explore</a>
      </div>
      <ul className="social">
        <li>
          <a href="/">
            <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="Instagram" />
          </a>
        </li>
      </ul>
    </section>
    </>
  );
};



export { Showcase };
