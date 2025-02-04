import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";

const Offers = () => {
   return (
      <div className="offers offers__container">
         <div className="offers-left">
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p>Only on best sellers products</p>
            <button>Check Now</button>
         </div>
         <div className="offers-right">
            <img src={exclusive_image} alt="" />
         </div>
      </div>
   );
};

export default Offers;
