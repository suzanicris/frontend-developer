import React from "react";
import ProductCard from "./ProductCard";

const Products = props => {
  return (
    <div>
      {props.products.map(product => {
        <ProductCard
          key={product.productId}
          image={product.items.images.imageUrl}
          title={product.productName}
          descripton={product.metaTagDescription}
        />;
      })}
    </div>
  );
};

export default Products;
