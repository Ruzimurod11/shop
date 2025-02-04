import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
   return (
      <div className="newsletter newsletter__container">
         <h2>Get Exclusive Offers On Your Email</h2>
         <p>Subscribe to our newsletter and stay updated </p>
         <div>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
         </div>
      </div>
   );
};

export default NewsLetter;
