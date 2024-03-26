import React from "react";
import "./scoreboard.css";
import Heading from "../../components/headin/heading";

const Scoreboard = () => {
  // Array of objects containing data for each person
  const peopleData = [
    { rank: 1, name: "Paul Adraneda", votes: 1002 },
    { rank: 2, name: "Don Gyver Gabito", votes: 1002 },
    { rank: 3, name: "Mico Reyes", votes: 1002 },
    { rank: 4, name: "Danilo Madrigalejos", votes: 1002 },
    { rank: 5, name: "Fifth Person", votes: 1002 },
    { rank: 6, name: "Sixth Person", votes: 1002 },
    { rank: 7, name: "Seventh Person", votes: 1002 },
    { rank: 8, name: "Eighth Person", votes: 1002 },
    { rank: 9, name: "Ninth Person", votes: 1002 },
    { rank: 10, name: "Tenth Person", votes: 1002 },
  ];

  return (
    <div>
      {/* News ticker-like navbar */}
      <div className="news-ticker ">
        <marquee behavior="scroll" direction="left" scrollamount="4">
          The scoreboard shows the positions based on the upvotes on your respective ideas.
        </marquee>
      </div>

      {/* Scoreboard component */}
      <div className="bg-partyPopper">
        <div className='quizgame-rankings'>
          <Heading className="flex tex-center" text='Scoreboard' />
          <div className='quizgame-board col-md-6 offset-md-3'>
            {/* Map over the array of people data to render each person */}
            {peopleData.map((person, index) => (
              <div key={index} className='row quizgame-rank text-md-left justify-content-md-center'>
                <div className={`col-md-1 col-12 text-center mb-3 mb-md-0 rank rank-${person.rank}`}><span>{person.rank}</span></div>
                <div className='col-md-8 col-12 text-md-left text-center'>{person.name}</div>
                <div className='col-md-3 col-12 text-md-left text-center upvoteBox'>{person.votes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
