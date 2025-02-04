import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./pages/Admin/Admin";

export const backend_url = "https://shopper-backend-uj20.onrender.com";

const App = () => {
   return (
      <>
         <Navbar />
         <Admin />
      </>
   );
};

export default App;
