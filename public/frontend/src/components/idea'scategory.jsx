import "../style/ideacat.css";
import "bootstrap";
import techimg from "../images/tech.jpg";

const Category = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div style={{ height: "18rem" }} className="col-md-4  my-3 ">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src={techimg}
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3 text-center"> Technology</p>
            <div className="cardcat-body">
              <h2>Technology and Innovation</h2>
              <p>
                Ideas related to new technologies, software, hardware, gadgets,
                apps, and innovative solutions.
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
        <div style={{ height: "18rem" }} className="col-md-4   my-3">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src="../images/business2.jpg"
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3">Startups</p>
            <div className="cardcat-body">
              <h2>Business and Entrepreneurship</h2>
              <p>
              Ideas for startups, business models, marketing strategies, product development, and growth opportunities.
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
        <div style={{ height: "18rem" }} className="col-md-4   my-3">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src="../images/art.jpg"
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3"> Art & Craft</p>
            <div className="cardcat-body">
              <h2>Art and Creativity</h2>
              <p>
               Ideas related to art, design, music, literature, filmmaking, photography, and other creative expressions.
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ height: "18rem" }} className="col-md-4  my-3 ">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src="../images/edu.jpg"
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3 text-center"> Education </p>
            <div className="cardcat-body">
              <h2> Education and Learning</h2>
              <p>
               Ideas to improve education systems, e-learning platforms, teaching methodologies, skill development, and lifelong learning.
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
        <div style={{ height: "18rem" }} className="col-md-4   my-3">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src="../images/sci.jpg"
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3"> Science </p>
            <div className="cardcat-body">
              <h2>Science and Research</h2>
              <p>
               Ideas in the fields of scientific research, discoveries, experiments, space exploration, and technological advancements.

              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
        <div style={{ height: "18rem" }} className="col-md-4   my-3">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src="../images/travel.jpg"
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3"> Tourism</p>
            <div className="cardcat-body">
              <h2> Travel and Tourism</h2>
              <p>
             Ideas to enhance travel experiences, sustainable tourism practices, destination recommendations, and cultural exchange.
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div style={{ height: "20rem" }} className="col-md-4  my-3 ">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src={techimg}
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3 text-center"> Technology</p>
            <div className="cardcat-body">
              <h2>This is a card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                unde minus quia dolorum corrupti! Voluptates molestiae eum in
                ipsum sunt!
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
        <div style={{ height: "20rem" }} className="col-md-4   my-3">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src={img4}
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3"> Technology</p>
            <div className="cardcat-body">
              <h2>This is a card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                unde minus quia dolorum corrupti! Voluptates molestiae eum in
                ipsum sunt!
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
        <div style={{ height: "20rem" }} className="col-md-4   my-3">
          <div className="cardcat mx-1 ">
            <a href="/">
              <img
                style={{ objectFit: "cover" }}
                src={img4}
                className="cardcat-image img-fluid"
                alt="ooo"
              />
            </a>
            <p className="cardcat-heading h3"> Technology</p>
            <div className="cardcat-body">
              <h2>This is a card</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                unde minus quia dolorum corrupti! Voluptates molestiae eum in
                ipsum sunt!
              </p>
              <a href="/"> View More</a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Category;
