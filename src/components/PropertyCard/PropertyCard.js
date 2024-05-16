import React from "react";
import "./PropertyCard.css";

function PropertyCard({ card }) {
  return (
    <div className="flexColStart r-card">
      <img src={card.image} alt="home" />
      <span className="r-price">
        <span>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{card.name}</span>
      <span className="r-address">{card.address}</span>
    </div>
  );
}

export default PropertyCard;
