import React from "react";
import "./css/LoginSignup.css";
import { backend_url } from "../App";

const LoginSignup = () => {
   const [state, setState] = React.useState("Login");
   const [formData, setFormData] = React.useState({
      username: "",
      password: "",
      email: "",
   });

   const changeHandler = (e) => {
      e.preventDefault();
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const login = async () => {
      console.log("Login function executed", formData);
      let responseData;
      await fetch(`${backend_url}/login`, {
         method: "POST",
         headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => (responseData = data));

      if (responseData.success) {
         localStorage.setItem("auth-token", responseData.token);
         window.location.replace("/");
      } else {
         alert(responseData.errors);
      }
   };

   const signup = async () => {
      console.log("Signup function executed", formData);
      let responseData;
      await fetch(`${backend_url}/signup`, {
         method: "POST",
         headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => (responseData = data));

      if (responseData.success) {
         localStorage.setItem("auth-token", responseData.token);
         window.location.replace("/");
      } else {
         alert(responseData.errors);
      }
   };

   return (
      <div className="loginsignup">
         <div className="loginsignup-container">
            <h2> {state} </h2>
            <div className="loginsignup-fields">
               {state === "Sign Up" ? (
                  <input
                     name="username"
                     onChange={changeHandler}
                     value={formData.username}
                     type="text"
                     placeholder="Your Name"
                  />
               ) : (
                  <></>
               )}

               <input
                  name="email"
                  onChange={changeHandler}
                  value={formData.email}
                  type="email"
                  placeholder="Email Address"
               />
               <input
                  name="password"
                  onChange={changeHandler}
                  value={formData.password}
                  type="password"
                  placeholder="Password"
               />
            </div>
            <button
               onClick={() => {
                  state === "Login" ? login() : signup();
               }}>
               Continue
            </button>
            {state === "Sign Up" ? (
               <p className="loginsignup-login">
                  Already have an account?{" "}
                  <span onClick={() => setState("Login")}>Login here</span>
               </p>
            ) : (
               <p className="loginsignup-login">
                  Create an account?{" "}
                  <span onClick={() => setState("Sign Up")}>Click here</span>
               </p>
            )}

            <div className="loginsignup-agree">
               <input type="checkbox" name="" id="" />
               <p>
                  By continuing, i agree to the terms of use & privacy policy.
               </p>
            </div>
         </div>
         <p></p>
      </div>
   );
};

export default LoginSignup;
