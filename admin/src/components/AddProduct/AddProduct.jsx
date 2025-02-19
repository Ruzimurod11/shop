import React from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";
import { backend_url } from "../../App";

const AddProduct = () => {
   const [image, setImage] = React.useState(false);
   const [productDetails, setProductDetails] = React.useState({
      name: "",
      image: "",
      category: "women",
      new_price: "",
      old_price: "",
   });
   const imageHandler = (e) => {
      setImage(e.target.files[0]);
   };

   const changeHandler = (e) => {
      setProductDetails({
         ...productDetails,
         [e.target.name]: e.target.value,
      });
   };

   const addProduct = async () => {
      let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append("product", image);

      await fetch(`${backend_url}/upload`, {
         method: "POST",
         headers: {
            Accept: "application/json",
         },
         body: formData,
      })
         .then((res) => res.json())
         .then((data) => {
            responseData = data;
         });

      if (responseData.success) {
         product.image = responseData.image_url;
         console.log(product);
         await fetch(`${backend_url}/addproduct`, {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
         })
            .then((res) => res.json())
            .then((data) => {
               data.success ? alert("Product added") : alert("Faild");
            });
      }
   };

   return (
      <div className="add-product">
         <div className="addproduct-itemfield">
            <p>Product title</p>
            <input
               value={productDetails.name}
               onChange={changeHandler}
               type="text"
               name="name"
               placeholder="Product name"
            />
         </div>
         <div className="addproduct-price">
            <div className="addproduct-itemfield">
               <p>Price</p>
               <input
                  value={productDetails.old_price}
                  onChange={changeHandler}
                  type="text"
                  name="old_price"
                  placeholder="Old price"
               />
            </div>
            <div className="addproduct-itemfield">
               <p>Offer Price</p>
               <input
                  value={productDetails.new_price}
                  onChange={changeHandler}
                  type="text"
                  name="new_price"
                  placeholder="New price"
               />
            </div>
         </div>
         <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select
               value={productDetails.category}
               onChange={changeHandler}
               name="category"
               className="add-product-selector">
               <option value="women">Women</option>
               <option value="men">Men</option>
               <option value="kid">Kid</option>
            </select>
         </div>
         <div className="addproduct-itemfield">
            <label htmlFor="file-input">
               <img
                  src={image ? URL.createObjectURL(image) : upload_area}
                  alt=""
                  className="addproduct-thumbnail-img"
               />
            </label>
            <input
               onChange={imageHandler}
               type="file"
               name="image"
               id="file-input"
               hidden
            />
         </div>
         <button
            onClick={() => {
               addProduct();
            }}
            className="addproduct-btn">
            Add
         </button>
      </div>
   );
};

export default AddProduct;
