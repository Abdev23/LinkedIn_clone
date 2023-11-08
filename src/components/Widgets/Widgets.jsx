
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './Widgets.css';


const Widgets = () => {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets__articleRight'>
        <h4> {heading} </h4>
        <p> {subtitle} </p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2> LinkedIn News </h2>
        <InfoIcon />
      </div>
      { newsArticle('WE Back at it AGAIN', 'Top news-9999 readers') }
      { newsArticle('make multimillion job', 'Top news-654 readers') }
      { newsArticle('bitcoin breaks 66k', 'Top news-63054 readers') }
      { newsArticle('MERN stack dominating', 'Top news-8054 readers') }
      { newsArticle('Game-Dev is good', 'Top news-754 readers') }
      { newsArticle('Tesla hits new highs', 'Top news-5412 readers') }
    </div>
  );
}


export default Widgets;