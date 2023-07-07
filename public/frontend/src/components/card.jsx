import React from "react";
import "../style/card.css";

const Card = () => {
  let n = 0;

  return (
    <div className="content">
      <h1 className="heading">Card Flip</h1>
      <p className="description">Hover over a card to flip it.</p>
      {Array(6)
        .fill()
        .map(() => {
          n++;
          return (
            <a href="#!" className="card" key={n}>
              <div
                className="front"
                style={{
                  backgroundImage: `url(//source.unsplash.com/300x40${n})`,
                }}
              >
                <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
              </div>
              <div className="back">
                <div>
                  <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                  <p>
                    Provident consectetur natus voluptatem quis tenetur sed
                    beatae eius sint.
                  </p>
                  <button className="button">Click Here</button>
                </div>
              </div>
            </a>
          );
        })}
    </div>
  );
};

export default Card;
