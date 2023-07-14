import "./yourideas.css";
import IdeaCard from "../../components/ideacard/ideacard";
import Banner from "../../components/banner/banner";
const YourIdeaArray = [
  {
    ideaCategory: "Category 2",
    description: [{
      ideaName: "Idea 1",
      ideaCardDesc: "Description of Idea 2",
      cardSrc: "../../src/images/1stsilde.webp",
      ideaDate: "2023-06-02"
    }]
  },
  {
    ideaCategory: "Category 2",
    description: [{
      ideaName: "Idea 1",
      ideaCardDesc: "Description of Idea 2",
      cardSrc: "../../src/images/food.webp",
      ideaDate: "2023-06-02"
    }]
  },
  {
    ideaCategory: "Category 2",
    description: [{
      ideaName: "Idea 1",
      ideaCardDesc: "Description of Idea 2",
      cardSrc: "../../src/images/art.jpg",
      ideaDate: "2023-06-02"
    }]
  },
  {
    ideaCategory: "Category 2",
    description: [{
      ideaName: "Idea 1",
      ideaCardDesc: "Description of Idea 2",
      cardSrc: "../../src/images/health.jpg",
      ideaDate: "2023-06-02"
    }]
  }
]

const YourIdeas = () => {
  return (
    <div>
      <div className="ideahead_z" style={{ marginBottom: 20, marginTop: 30 }}>Your ideas</div>
      <Banner />
      <div className="container-fluid containerSet_z">
        <div className="cardidea_z">
          {YourIdeaArray.map((card, index) => (
            <div key={index}>
              {card.description.map((idea, ideaIndex) => (
                <IdeaCard
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

  );
};
export default YourIdeas;
