import IdeaCard from '../../components/ideacard/ideacard';
import CategoryNav from "../../components/navbar/categorynav";
import "./category.css";
import cardData from './cardarray';
import Heading from '../../components/headin/heading';
// import Navbar2 from '../../components/navbar/navbar2';
const Tourism = () => {
    const techIdeas = cardData.filter((card) => card.ideaCategory === "Tourism");
    return (
        <div  className='container'>
        <CategoryNav/>
        <Heading text="Tourism"/>

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

export default Tourism;