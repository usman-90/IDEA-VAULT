import { Carousel } from "react-bootstrap";
import '../components/ideaposter.css';

const MyCarousel=()=>{
    return(
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src="../images/technical-Innovation.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src="../images/health.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src="../images/fooddd.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        </Carousel>
    );
};
export default MyCarousel;