import React from "react";
import "./RelatedProducts.css";
import Item from "../Item/Item";
import data_product from "../assets/data";

const RelatedProducts = () => {
   return (
      <div className="relatedproducts">
         <h2>Related Products</h2>
         <hr />
         <div className="relatedproducts-items">
            {data_product?.map((item, i) => {
               return (
                  <Item
                     key={i}
                     name={item.name}
                     image={item.image}
                     id={item.id}
                     new_price={item.new_price}
                     old_price={item.old_price}
                  />
               );
            })}
         </div>
         <p></p>
      </div>
   );
};

export default RelatedProducts;
