import React, { useEffect } from "react";
import "./scoreboard.css";

const Scoreboard = () => {
  useEffect(() => {
    const partyPopper = document.querySelector(".party-popper");
    setTimeout(() => {
      partyPopper.style.display = "none";
    }, 1000); // Adjust the timeout based on the duration of your animation
  }, []);

  return (
    <div className='quizgame-rankings'>
      <div className='party-popper'></div> {/* Add the party popper background */}
      <div className='quizgame-board col-md-6 offset-md-3'>
        <div className='quizgame-board-title'>RANKINGS</div>
        
        <div className='row quizgame-rank text-md-left text-center'>
          <div className='col-md-1 rank rank-1'><span>1</span></div>
          <div className='col-md-8'>Paul Adraneda</div>
          <div className='col-md-3'>999,999</div>
        </div>
        
        <div className='row quizgame-rank text-md-left text-center'>
          <div className='col-md-1 rank rank-2'><span>2</span></div>
          <div className='col-md-8'>Don Gyver Gabito</div>
          <div className='col-md-3'>999,999</div>
        </div>
        
        <div className='row quizgame-rank text-md-left text-center'>
          <div className='col-md-1 rank rank-3'><span>3</span></div>
          <div className='col-md-8'>Mico Reyes</div>
          <div className='col-md-3'>999,999</div>
        </div>
        
        <div className='row quizgame-rank text-md-left text-center'>
          <div className='col-md-1 rank'><span>4</span></div>
          <div className='col-md-8'>Danilo Madrigalejos</div>
          <div className='col-md-3'>999,999</div>
        </div>
        
      </div>
    </div>
  );
};

export default Scoreboard;
