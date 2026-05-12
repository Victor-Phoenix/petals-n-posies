import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import Carousel from "../components/Carousel";
import { useSelector } from "react-redux";
import { categorySelect } from "../context/flowerSlice";

function Homepage() {
  const { selectedCategory } = useSelector((state) => state.flower);

  return (
    <div className=" ">
      {selectedCategory === "all" && <Carousel />}
      <ProductList />
    </div>
  );
}

export default Homepage;
