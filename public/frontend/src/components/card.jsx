import React from 'react';
import "../components/cardidea.css"

function CardComponent() {
  return (
    <div className="cardparent_z">
        <div className="card">
            <img src="../images/tech.jpg" className="card-img-top" alt="Image" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
        <div className="card">
            <img src="../images/tech.jpg" className="card-img-top" alt="Image" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
        <div className="card">
            <img src="../images/tech.jpg" className="card-img-top" alt="Image" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
        <div className="card">
            <img src="../images/tech.jpg" className="card-img-top" alt="Image" />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    </div>
    
  );
}

export default CardComponent;
