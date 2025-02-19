import React from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts";

const Product = () => {
   const { all_product } = React.useContext(ShopContext);
   const { productId } = useParams();
   const product = all_product.find((e) => e.id === Number(productId));
   return (
      <>
         <Breadcrumb product={product} />
         <ProductDisplay product={product} />
         <DescriptionBox />
         <RelatedProducts />
      </>
   );
};

export default Product;
