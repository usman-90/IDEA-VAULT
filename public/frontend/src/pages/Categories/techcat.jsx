import IdeaCard from '../../components/ideacard/ideacard';
import CategoryNav from "../../components/navbar/categorynav";
import "./category.css";
import cardData from './cardarray';
import Heading from '../../components/headin/heading';
const Technology = () => {
    const techIdeas = cardData.filter((card) => card.ideaCategory === "Tech");
    return (
        <div  className='container'>
            <CategoryNav />
            <Heading text="Technology"/>

            <div style={{backgroundColor:"#daeaf0"}} className='container-fluid container-small'>

                {techIdeas.map((card, index) => (
                    <div className='technologyCategory_z' key={index}>
                        {card.description.map((idea, ideaIndex) => (
                            <IdeaCard
                            className="mx-3"
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

export default Technology;


