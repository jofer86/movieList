import React from 'react';

const Card = ({ movie }) => {
  return (
    <div>
      <h2> {`#${movie.ranking} - ${movie.title} - ${movie.year}`} </h2>
      <img src={`/../src/${movie.img.src}`} alt={movie.img.alt} />
      <p> {`Distributor: ${movie.distributor}`} </p>
      <p> {`Amount: ${movie.amount}`} </p>
    </div>
  )
};

export default Card;