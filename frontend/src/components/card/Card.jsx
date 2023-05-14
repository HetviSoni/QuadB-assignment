import React from 'react';
import './card.css';

const Card = ({ show }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={show.image.medium} alt={show.name} />
        </div>
        <div className="card-back">
          <h2>{show.name}</h2>
          <p>{show.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
