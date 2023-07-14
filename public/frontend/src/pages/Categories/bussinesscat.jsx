import IdeaCard from '../../components/ideacard/ideacard';
import CategoryNav from "../../components/navbar/categorynav";
import "./category.css";
import cardData from './cardarray';
const Bussiness = () => {
    const techIdeas = cardData.filter((card) => card.ideaCategory === "Category 2");
    return (
        <div>
            <CategoryNav />
            <div className='w-100 bg-mustard text-center'><h2>Bussiness </h2></div>

            <div className='container-fluid container-small'>

                {techIdeas.map((card, index) => (
                    <div className='technologyCategory_z' key={index}>
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

    );
};

export default Bussiness;