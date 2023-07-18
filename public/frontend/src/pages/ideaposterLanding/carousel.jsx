import { Carousel } from "react-bootstrap";
import './ideaposter.css';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="ideacarsec_z"></div>
        <img
          className="d-block w-100 custom-height"
          src="../../src/images/technical-Innovation.png"
          alt="First slide" />
        <div class="carousel-caption d-none d-md-block col-md-8">
          <a href="/basicinfo" className="postidea_z">Post an Idea</a>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-height"
          src="../../src/images/health.jpg"
          alt="Second slide"
        />
        <div class="carousel-caption d-none d-md-block col-md-8">
          <a href="/basicinfo" className="postidea_z">Post an Idea</a>
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 custom-height"
          src="../../src/images/fooddd.jpg"
          alt="Second slide"
        />
        <div class="carousel-caption d-none d-md-block col-md-8">
          <a href="/basicinfo" className="postidea_z">Post an Idea</a>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
export default MyCarousel;