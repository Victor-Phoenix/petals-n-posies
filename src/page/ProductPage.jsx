import { useParams } from "react-router";
import { useProduct } from "../context/ProductProvider";
import { useEffect } from "react";
function ProductPage({ flowerList }) {
  const { id } = useParams();
  const {
    filteredFlower,
    isLoading,
    selectedCategory,
    currentFlower,
    getFlower,
  } = useProduct();

  // console.log(id);

  useEffect(
    function () {
      getFlower(id);
      console.log("Current flower is: " + currentFlower);
    },
    [id],
  );

  // getFlower(id);
  //   console.log(flowerList);
  // const currentFlower = flowerList.find((item) => item.id === id);
  // console.log(currentFlower);
  return (
    <div className="product-container">
      <img src={currentFlower.imageUrl} />
      <p>PRODUCT PAGE</p>
    </div>
  );
}
export default ProductPage;
