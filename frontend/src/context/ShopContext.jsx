import React, { createContext } from "react";
export const ShopContext = createContext(null);
import { backend_url } from "../App";

const getDefaultCart = () => {
   let cart = {};
   for (let i = 0; i < 300 + 1; i++) {
      cart[i] = 0;
   }
   return cart;
};

const ShopContextProvider = (props) => {
   const [all_product, setAllProduct] = React.useState([]);
   const [cartItems, setCartItems] = React.useState(getDefaultCart());

   React.useEffect(() => {
      fetch(`${backend_url}/allproducts`)
         .then((res) => res.json())
         .then((data) => setAllProduct(data));

      if (localStorage.getItem("auth-token")) {
         fetch(`${backend_url}/getcart`, {
            method: "POST",
            headers: {
               Accept: "application/form-data",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
            body: "",
         })
            .then((res) => res.json())
            .then((data) => setCartItems(data));
      }
   }, []);

   const addToCart = (itemId) => {
      setCartItems((prev) => ({
         ...prev,
         [itemId]: prev[itemId] + 1,
      }));
      if (localStorage.getItem("auth-token")) {
         fetch(`${backend_url}/addtocart`, {
            method: "POST",
            headers: {
               Accept: "application/form-data",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemId: itemId }),
         })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
      }
      console.log(cartItems);
   };

   const removeFromCart = (itemId) => {
      setCartItems((prev) => ({
         ...prev,
         [itemId]: prev[itemId] - 1,
      }));
      if (localStorage.getItem("auth-token")) {
         fetch(`${backend_url}/removefromcart`, {
            method: "POST",
            headers: {
               Accept: "application/form-data",
               "auth-token": `${localStorage.getItem("auth-token")}`,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ itemId: itemId }),
         })
            .then((res) => res.json())
            .then((data) => console.log(data));
      }
   };

   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            let itemInfo = all_product.find(
               (product) => product.id === Number(item)
            );
            totalAmount += itemInfo.new_price * cartItems[item];
         }
      }
      return totalAmount;
   };

   const getTotalCartItems = () => {
      let totalItem = 0;
      for (const item in cartItems) {
         if (cartItems[item] > 0) {
            totalItem += cartItems[item];
         }
      }
      return totalItem;
   };

   const contextValue = {
      getTotalCartItems,
      getTotalCartAmount,
      all_product,
      cartItems,
      addToCart,
      removeFromCart,
   };

   return (
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
   );
};

export default ShopContextProvider;
