import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { useProduct } from "../context/flowerSlice";
import Carousel from "../components/Carousel";

function Homepage() {
  const { flowerList, isLoading } = useProduct();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Carousel />
      <ProductList flowerList={flowerList} />
    </>
  );
}

export default Homepage;
