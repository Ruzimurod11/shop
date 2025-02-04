import React from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
import { backend_url } from "../../App";

const ListProduct = () => {
   const [allProducts, setAllProducts] = React.useState([]);

   const fetchInfo = async () => {
      await fetch(`${backend_url}/allproducts`)
         .then((res) => res.json())
         .then((data) => {
            setAllProducts(data);
         });
   };

   React.useEffect(() => {
      fetchInfo();
   }, []);

   const removeProduct = async (id) => {
      await fetch(`${backend_url}/removeproduct`, {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ id: id }),
      });
      await fetchInfo();
   };

   return (
      <div className="list-product">
         <h2>All Products List</h2>
         <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p>Category</p>
            <p>Remove</p>
         </div>
         <div className="listproduct-allproducts">
            <hr />
            {allProducts?.map((product, idx) => {
               return (
                  <>
                     <div
                        key={idx}
                        className="listproduct-format-main listproduct-format">
                        <img
                           src={product.image}
                           alt=""
                           className="listproduct-product-icon"
                        />
                        <p> {product.name} </p>
                        <p> ${product.old_price} </p>
                        <p> ${product.new_price} </p>
                        <p> {product.category} </p>
                        <img
                           onClick={() => {
                              removeProduct(product.id);
                           }}
                           src={cross_icon}
                           alt=""
                           className="listproduct-remove-icon"
                        />
                     </div>
                     <hr />
                  </>
               );
            })}
         </div>
      </div>
   );
};

export default ListProduct;
