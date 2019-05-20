import React from "react";
import { Link } from "react-router-dom"

const ProductCard = props => {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <div>
        <Link to={}>{props.title}</Link>
        <span>{props.price}</span>
        <p>{props.descripton}</p>
      </div>
    </div>
  );
};

export default ProductCard;