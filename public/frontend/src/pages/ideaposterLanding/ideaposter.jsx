
import React from "react";
import "./ideaposter.css";
import IdeaCard from "../../components/ideacard/ideacard";
import { Link } from "react-router-dom";
import MyCarousel from "./carousel";
import cardData from "../Categories/cardarray";

const IdeaPoster = () => {
  const techIdeas = cardData.filter((card) => card.ideaCategory === "Tech");
  const artIdeas = cardData.filter((card) => card.ideaCategory === "Category 3");
  const bussIdeas = cardData.filter((card) => card.ideaCategory === "Category 2");
  const eduIdeas = cardData.filter((card) => card.ideaCategory === "Education");
  const sciIdeas = cardData.filter((card) => card.ideaCategory === "Science");
  const tourIdeas = cardData.filter((card) => card.ideaCategory === "Tourism");

  return (
    <div className="full_z">
      <div className="shareideas_z w-100">
        <div className="navideaposter_z w-100">
          <div className="posting_z">
            <div className="postidea_z">
              <Link to="/ideasection" className="yourideasec_z">
                Your Ideas
              </Link>
            </div>
            <div className="postidea_z">
              <Link to="/basicinfo" className="yourideasec_z">
                Post an Idea
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel_z w-100">
          <MyCarousel />
        </div>
      </div>
      <div className="container idea1_z">
        <div className="body_z">
          <div className="filter_z">
            <span style={{ fontSize: 20 }}>
              <b>Filter results </b>
            </span>{" "}
            <br />
            <span style={{ color: "grey", fontSize: 20 }}>Category</span>
            <br />
            <ul className="list-unstyled">
              <li>
                <Link className="linkcat_z" to="/technology">
                  Tech and Innovation
                </Link>
              </li>
              <li>
                <Link className="linkcat_z" to="/arts">
                  Arts and Crafts
                </Link>
              </li>
              <li>
                <Link className="linkcat_z" to="/science">
                  Science
                </Link>
              </li>
              <li>
                <Link className="linkcat_z" to="/education">
                  Education and Training
                </Link>
              </li>
              <li>
                <Link className="linkcat_z" to="/tourism">
                  Tourism
                </Link>
              </li>
              <li>
                <Link className="linkcat_z" to="/bussiness">
                  Bussiness
                </Link>
              </li>
            </ul>
          </div>
          <div className="category_z">
            <div className="search_z">
              <div className="text_z">
                <input
                  type="text"
                  name="search-category"
                  id="search"
                  placeholder="Search category"
                  className="typeidea_z"
                ></input>
              </div>
              <div className="button_z">
                <button className="searchbutton">Search</button>
              </div>
            </div>
            <br />
            <div className="tech_z">
              <div className="catideaHead_z">Technology</div>
              {techIdeas.map((card, index) => (
                <div className="tech_z" key={index}>
                  {card.description.map((idea, ideaIndex) => (
                    <IdeaCard
                      className="mx-3"
                      key={ideaIndex}
                      ideaName={idea.ideaName}
                      ideaCardDesc={idea.ideaCardDesc}
                      cardSrc={idea.cardSrc}
                      ideaDate={idea.ideaDate}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="art_z">
              <div className="catideaHead_z">Arts and Crafts</div>
              {artIdeas.map((card, index) => (
                <div className="tech_z" key={index}>
                  {card.description.map((idea, ideaIndex) => (
                    <IdeaCard
                      className="mx-3"
                      key={ideaIndex}
                      ideaName={idea.ideaName}
                      ideaCardDesc={idea.ideaCardDesc}
                      cardSrc={idea.cardSrc}
                      ideaDate={idea.ideaDate}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="buss_z">
              <div className="catideaHead_z">Bussiness</div>
              {bussIdeas.map((card, index) => (
                <div className="tech_z" key={index}>
                  {card.description.map((idea, ideaIndex) => (
                    <IdeaCard
                      className="mx-3"
                      key={ideaIndex}
                      ideaName={idea.ideaName}
                      ideaCardDesc={idea.ideaCardDesc}
                      cardSrc={idea.cardSrc}
                      ideaDate={idea.ideaDate}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="edu_z">
              <div className="catideaHead_z">Education</div>
              {eduIdeas.map((card, index) => (
                <div className="tech_z" key={index}>
                  {card.description.map((idea, ideaIndex) => (
                    <IdeaCard
                      className="mx-3"
                      key={ideaIndex}
                      ideaName={idea.ideaName}
                      ideaCardDesc={idea.ideaCardDesc}
                      cardSrc={idea.cardSrc}
                      ideaDate={idea.ideaDate}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="sci_z">
              <div className="catideaHead_z">Science</div>
              {sciIdeas.map((card, index) => (
                <div className="tech_z" key={index}>
                  {card.description.map((idea, ideaIndex) => (
                    <IdeaCard
                      className="mx-3"
                      key={ideaIndex}
                      ideaName={idea.ideaName}
                      ideaCardDesc={idea.ideaCardDesc}
                      cardSrc={idea.cardSrc}
                      ideaDate={idea.ideaDate}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="tour_z">
              <div className="catideaHead_z">Tourism</div>
              {tourIdeas.map((card, index) => (
                <div className="tech_z" key={index}>
                  {card.description.map((idea, ideaIndex) => (
                    <IdeaCard
                      className="mx-3"
                      key={ideaIndex}
                      ideaName={idea.ideaName}
                      ideaCardDesc={idea.ideaCardDesc}
                      cardSrc={idea.cardSrc}
                      ideaDate={idea.ideaDate}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaPoster;
