import { useNavigate, useParams } from "react-router-dom";
import { use, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { flowerSelect, getFlower } from "../context/flowerSlice";
import { addToCart, setDeliveryDate } from "../features/cart/cartSlice";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function ProductPage({ flowerList }) {
  const param = useParams();

  const { currentFlower, isLoading } = useSelector((state) => state.flower);
  const deliveryDate = useSelector((state) => state.cart.deliveryDate);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  function handleAddItem(currentFlower) {
    const newItem = {
      id: currentFlower.id,
      name: currentFlower.name,
      price: currentFlower?.variants?.[selectedIndex]?.price,
      type: currentFlower?.variants?.[selectedIndex]?.type,
      imageUrl: currentFlower.imageUrl,
      quantity: 1,
    };
    if (!deliveryDate) return;
    dispatch(addToCart(newItem));
  }
  return (
    <>
      <div className="product-container flex justify-center items-center mt-8 ">
        <div className="w-1/3 shrink-0">
          <img
            className="w-[128rem] h-96 object-cover"
            src={currentFlower.variants?.[selectedIndex]?.imageUrl}
          />
        </div>
        <div className=" p-4 mx-4">
          <div className=" p-4">
            <div className="w-80 px-5">
              <h3 className="font-bold text-2xl">{currentFlower.name}</h3>
              <hr className="mb-2 border-[1px] border-gray-500 " />
              <div>
                {currentFlower?.variants?.map((type, index) => {
                  return (
                    <button
                      key={index}
                      className={`border hover:cursor-pointer mr-2 px-2 ${selectedIndex === index ? "bg-amber-200 transition duration-500" : ""}`}
                      onClick={() => setSelectedIndex(index)}
                    >
                      {type.type}
                    </button>
                  );
                })}
              </div>
              <div className="mt-2">
                <p>{currentFlower?.variants?.[selectedIndex]?.description}</p>

                <p className="font-bold">
                  Price: ${currentFlower?.variants?.[selectedIndex]?.price}
                </p>
                <span className="font-semibold">Delivery Date:</span>
                <div
                  className="
                      flex items-center justify-between
                      w-full
                      rounded-md
                      bg-white
                      px-4 py-2
                      shadow-sm
                      ring-2 ring-gray-500
                      hover:ring-amber-500 hover:shadow-md
                      transition
                      my-1
                    "
                >
                  <span className="mr-2 text-gray-500 ">📅</span>
                  <DatePicker
                    className=" caret-transparent hover:cursor-pointer"
                    selected={deliveryDate ? new Date(deliveryDate) : null}
                    onChange={(date) =>
                      dispatch(setDeliveryDate(date.toISOString()))
                    }
                    minDate={new Date()}
                    filterDate={(d) => d.getDay() !== 0}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Please Select a Date"
                    onClick={(e) => {
                      e.target.focus();
                    }}
                    onKeyDown={(e) => e.preventDefault()}
                  />
                </div>
              </div>

              <button
                className="inline-block border hover:cursor-pointer h-12 w-48 mt-2     hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] "
                onClick={() => handleAddItem(currentFlower)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductPage;
