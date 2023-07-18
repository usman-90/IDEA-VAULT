import "../../style/ideacat.css";
import "bootstrap";
import CategoryCard from "./categorycard";
import { Link } from "react-router-dom";

const categories = [
  { categoryid:3,
    categoryTitle: "Technology",
    categoryCardSrc:
      "https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=1800&t=st=1688852954~exp=1688853554~hmac=cae5bbfcbf89e5945ef6c459bd9364080e1c82162bbd970a3a599bd5b3a46bd8",
    categoryDesc: `Ideas related to new technologies, software, hardware, gadgets,
  apps, and innovative solutions.`,
  },
  { categoryid:8,
    categoryTitle: "Business",
    categoryCardSrc:
      "https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=1480&t=st=1688853073~exp=1688853673~hmac=475ce799eaf6fd6a917c7b5845fdd715e92d8856c0d95f2821b7b2832a48c4d9",
    categoryDesc: ` Ideas for startups, business models, marketing strategies,
    product development, and growth opportunities.`,
  },
  { categoryid:2,
    categoryTitle: "Art & Craft",
    categoryCardSrc:
      "https://img.freepik.com/free-photo/colorful-image-woman-s-face-with-words-word-bottom_188544-12871.jpg?w=1480&t=st=1688853211~exp=1688853811~hmac=7ff92eddb16cfddf7cbbbcfdd65cf9f3ef169f35c18a3c00fa74f53efc768827",
    categoryDesc: ` Ideas related to art, design, music, literature, filmmaking,
    photography, and other creative expressions.`,
  },
  { categoryid:4,
    categoryTitle: "Education",
    categoryCardSrc:
      "https://img.freepik.com/free-photo/graduation-gown-cap-tassel-success-achieved-generated-by-ai_188544-25873.jpg?t=st=1688851957~exp=1688852557~hmac=48b4e5c43efb056e498c0fa04786a6762be3183a1964487a29e51c6ae708a4ab",
    categoryDesc: ` Ideas to improve education systems, e-learning platforms,
    teaching methodologies, skill development, and lifelong
    learning.`,
  },
  { categoryid:6,
    categoryTitle: "Science",
    categoryCardSrc:
      "https://img.freepik.com/free-vector/abstract-technology-particle-background_23-2148408853.jpg?w=1380&t=st=1688852192~exp=1688852792~hmac=54a01e14ac8d21ad26516756dd301406be4d131ac9deac906e7daff971db62a3",
    categoryDesc: `Ideas in the fields of scientific research, discoveries,
    experiments, space exploration, and technological advancements.`,
  },
  { categoryid:7,
    categoryTitle: "Tourism",
    categoryCardSrc:
      "https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?w=1380&t=st=1688852230~exp=1688852830~hmac=a796e4df303698027285826f0d7ba386e07ab1b0b1f762ebfd136379387f66a5",
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
