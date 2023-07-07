import React from "react";
import "../style/showcase.css";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <video src="../images/video2.mp4" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Bridge the Gap</h2>
          <h3>Exchange the Brilliance</h3>
          <p>
            Unleash the power of limitless thinking within our Idea Vault.
            Explore new frontiers, shatter conventional wisdom, and ignite a
            revolution of ideas. Connect with a vibrant community of passionate
            thinkers and creatives, where collaboration knows no bounds.
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
              <img
                src="https://i.ibb.co/ySwtH4B/instagram.png"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export { Showcase };
