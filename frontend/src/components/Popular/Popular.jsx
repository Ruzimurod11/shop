import React from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { backend_url } from "../../App";

const Popular = () => {
   const [popularProducts, setPopularProducts] = React.useState([]);

   React.useEffect(() => {
      fetch(`${backend_url}/popularinwomen`)
         .then((res) => res.json())
         .then((data) => setPopularProducts(data));
   }, []);
   return (
      <div className="popular popular__container">
         <h2>POPULAR IN WOMEN</h2>
         <hr />
         <div className="popular-item">
            {popularProducts?.map((item, i) => {
               return (
                  <Item
                     key={i}
                     id={item.id}
                     image={item.image}
                     name={item.name}
                     new_price={item.new_price}
                     old_price={item.old_price}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Popular;
