import React from "react";
import "./Breadcrumb.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
   const { product } = props;
   return (
      <div className="breadcrumb breadcrumb__container">
         HOME <img src={arrow_icon} alt="" />
         SHOP <img src={arrow_icon} alt="" /> {product.category}
         <img src={arrow_icon} alt="" /> {product.name}
         <p></p>
      </div>
   );
};

export default Breadcrumb;
