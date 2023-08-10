import React from "react";
import ProductSlider from "../components/ProductSlider.js";
//usefetch hook
import useFetch from "../hooks/useFetch.js";

const LatestProducts = () => {
  //get new products
  const { data } = useFetch("products?populate=*&filters[isNew]=true");
  return (
    <div className="mb-16">
      <div className="mx-20">
        <h2 className="h2 mb-6 text-center lg:text-left">Latest Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  );
};

export default LatestProducts;
