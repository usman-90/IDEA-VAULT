import { Carousel } from "react-bootstrap";
import React, { useState } from 'react';

import './ideaposter.css';
import IdeaCard from "../../components/ideacard/ideacard";
import cardData from "../Categories/cardarray";

const CategoryCarousel = ({a} ) => {
    return (
        <Carousel>
            {a.map((card, index) => (
                <Carousel.Item key={index}>
                    <div className="ideacarsec_z"  >
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
                </Carousel.Item>

            ))}
            

        </Carousel>
    );
};
export default CategoryCarousel;

