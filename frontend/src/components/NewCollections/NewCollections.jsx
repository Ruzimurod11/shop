import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { backend_url } from "../../App";

const NewCollections = () => {
   const [new_collection, setNewCollection] = React.useState([]);

   React.useEffect(() => {
      fetch(`${backend_url}/newcollections`)
         .then((res) => res.json())
         .then((data) => setNewCollection(data));
   }, []);
   return (
      <div className="new-collections new-collections__container">
         <h2>New Collections</h2>
         <hr className="line" />
         <div className="collections">
            {new_collection?.map((item, i) => {
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

export default NewCollections;
