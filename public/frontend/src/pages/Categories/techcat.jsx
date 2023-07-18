import React from 'react';
import IdeaCard from '../../components/ideacard/ideacard';
import CategoryNav from '../../components/navbar/categorynav';
import './category.css';
import Heading from '../../components/headin/heading';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchIdeaByCategory from '../../function2/fetchIdeaBycategory';
import { Link } from "react-router-dom";

const Technology = () => {
  const { catid } = useParams();
  const {cattitle} = useParams()
    console.log(catid);
  const ideasRes = useQuery(['catid', catid], fetchIdeaByCategory);
  const ideasData = ideasRes?.data?.data;
  console.log(ideasData);

  return (
    <div className="container">
      <CategoryNav />
      <Heading text={`${cattitle}`} />

      <div style={{ backgroundColor: '#daeaf0' }} className="container-fluid container-small">
        <div className="technologyCategory_z">
          
        
        
          {ideasData?.map((idea, index) => (
            <Link key={index} to={`/ideadetail/${idea.ideaid}`}>
            <IdeaCard
              className="mx-3"
             
              ideaName={idea.ideatitle}
              ideaCardDesc={idea.carddescription}
             
              ideaDate={idea.postedat}
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;