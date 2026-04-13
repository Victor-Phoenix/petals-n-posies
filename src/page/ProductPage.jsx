import { useParams } from "react-router-dom";
import { use, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flowerSelect, getFlower } from "../context/flowerSlice";
function ProductPage({ flowerList }) {
  const param = useParams();

  const { currentFlower, isLoading } = useSelector((state) => state.flower);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const dispatch = useDispatch();
  // console.log(id);
  useEffect(
    function () {
      dispatch(getFlower(param.id));
    },
    [param.id, dispatch],
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!currentFlower) {
    return <p>Loading Product Details..</p>;
  }
  // console.log("description " + currentFlower?.variants[0].description);
  // getFlower(id);
  //   console.log(flowerList);
  // const currentFlower = flowerList.find((item) => item.id === id);
  // console.log(currentFlower);
  return (
    <>
      <div className="product-container flex justify-center items-center ">
        <div className="w-1/3 shrink-0">
          <img className="w-full " src={currentFlower.imageUrl} />
        </div>
        <div>
          <div className="w-80 px-5">
            {currentFlower?.variants?.map((type, index) => {
              // console.log(type.type);
              console.log("Variant details:", type.type);
              return (
                <button
                  className="border hover:cursor-pointer mr-2"
                  onClick={() => setSelectedIndex(index)}
                >
                  {type.type}
                </button>
              );
            })}
            <div className="mt-4 h-32">
              <p>{currentFlower?.variants?.[selectedIndex]?.description}</p>
              <p className="font-bold">
                Price: $
                {currentFlower.price +
                  currentFlower?.variants?.[selectedIndex]?.priceAdd}
              </p>
            </div>
            <button className="inline-block border hover:cursor-pointer h-12 w-48">
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
