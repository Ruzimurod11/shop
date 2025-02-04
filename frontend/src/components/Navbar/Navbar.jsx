import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/nav_dropdown.png";

const Navbar = () => {
   const [menu, setMenu] = React.useState("shop");
   const { getTotalCartItems } = React.useContext(ShopContext);
   const navigate = useNavigate();
   const menuRef = React.useRef();
   const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle("open");
      console.log(2);
   };
   return (
      <div className="navbar">
         <div className="navbar__container">
            <div className="nav-logo">
               <img src={logo} alt="" />
               <p>SHOPPER</p>
            </div>
            <img
               className="nav-dropdown"
               onClick={dropdown_toggle}
               src={nav_dropdown}
               alt=""
            />
            <ul ref={menuRef} className="nav-menu">
               <li
                  onClick={() => {
                     setMenu("shop");
                  }}>
                  <Link to={"/"}>Shop</Link> {menu === "shop" ? <hr /> : <></>}
               </li>
               <li
                  onClick={() => {
                     setMenu("mens");
                  }}>
                  <Link to={"/mens"}>Men</Link>
                  {menu === "mens" ? <hr /> : <></>}
               </li>
               <li
                  onClick={() => {
                     setMenu("womens");
                  }}>
                  <Link to={"/womens"}>Women</Link>
                  {menu === "womens" ? <hr /> : <></>}
               </li>
               <li
                  onClick={() => {
                     setMenu("kids");
                  }}>
                  <Link to={"/kids"}>Kids</Link>
                  {menu === "kids" ? <hr /> : <></>}
               </li>
            </ul>
            <div className="nav-login-cart">
               {localStorage.getItem("auth-token") ? (
                  <button
                     onClick={() => {
                        localStorage.removeItem("auth-token");
                        window.location.replace("/");
                     }}>
                     Logout
                  </button>
               ) : (
                  <button onClick={() => navigate("/login")}>Login</button>
               )}

               <Link to={"/cart"}>
                  <img src={cart_icon} alt="" />
               </Link>
               <div className="nav-cart-count"> {getTotalCartItems()} </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
