import "../../style/ideacat.css";
import "bootstrap";
import CategoryCard from "./categorycard";
import { Link } from "react-router-dom";
import TechnologyImage from '../../images/Catego/tech.jpg'
import BusinessImage from '../../images/Catego/business.jpg'
import ArtImage from '../../images/Catego/art.jpg'
import EducationImage from '../../images/Catego/edu.jpg'
import ScienceImage from '../../images/Catego/sci.jpg'
import TourismImage from '../../images/Catego/tour.jpg'


const categories = [
  { categoryid:3,
    categoryTitle: "Technology",
    categoryCardSrc: TechnologyImage,
    categoryDesc: `Ideas related to new technologies, software, hardware, gadgets,
  apps, and innovative solutions.`,
  },
  { categoryid:8,
    categoryTitle: "Business",
    categoryCardSrc: BusinessImage,
    categoryDesc: ` Ideas for startups, business models, marketing strategies,
    product development, and growth opportunities.`,
  },
  { categoryid:2,
    categoryTitle: "Art & Craft",
    categoryCardSrc: ArtImage,
    categoryDesc: ` Ideas related to art, design, music, literature, filmmaking,
    photography, and other creative expressions.`,
  },
  { categoryid:4,
    categoryTitle: "Education",
    categoryCardSrc: EducationImage,
    categoryDesc: ` Ideas to improve education systems, e-learning platforms,
    teaching methodologies, skill development, and lifelong
    learning.`,
  },
  { categoryid:6,
    categoryTitle: "Science",
    categoryCardSrc: ScienceImage,
    categoryDesc: `Ideas in the fields of scientific research, discoveries,
    experiments, space exploration, and technological advancements.`,
  },
  { categoryid:7,
    categoryTitle: "Tourism",
    categoryCardSrc: TourismImage,
    categoryDesc: `Ideas to enhance travel experiences, sustainable tourism
    practices, destination recommendations, and cultural exchange.`,
  },
];

const Category = () => {
  return (
    <div style={{backgroundColor:"#daeaf0",paddingBottom:"8rem"}}  id="categoryDIVV"className="container-fluid animatedboxx">
      
    <div className="container text-center">
      <div className="row">
        {categories.map((category) => {
          return (
            <div
            
            key={category}
              style={{ height: "18rem" }}
              className="col-md-4   my-3"
            >
            <Link  to={`/category/${category.categoryid}/${category.categoryTitle}`}>
              <CategoryCard

                categoryCardSrc={category.categoryCardSrc}
                categoryDesc={category.categoryDesc}
                categoryTitle={category.categoryTitle}
              />
          </Link>
            </div> 
          );
        })}
      </div>
    </div>
    
    </div>
  );
};

export default Category;
