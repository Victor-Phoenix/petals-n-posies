import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  getTotalSum,
} from "../cart/cartSlice";

function Checkout() {
  const cart = useSelector((state) => state.cart.cart);
  const cartTotal = useSelector(getTotalSum);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className=" flex flex-col   mx-auto w-full max-w-xl justify-between border-gray-900  border ">
        {cart.map((item) => {
          console.log(item);
          return (
            <div className="border-b  grid grid-cols-2 ">
              <div>
                <h3>{item.name}</h3>
                <span className="text-sm text-neutral-400">
                  type: {item.type}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    dispatch(decreaseQuantity({ id: item.id, type: item.type }))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    dispatch(increaseQuantity({ id: item.id, type: item.type }))
                  }
                >
                  +
                </button>
                <button
                  className="hover:cursor-pointer"
                  onClick={() =>
                    dispatch(deleteItem({ id: item.id, type: item.type }))
                  }
                >
                  DELETE
                </button>
              </div>
              <span>Total Price {item.price * item.quantity}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h2>{cartTotal}</h2>
      </div>
    </div>
  );
}

export default Checkout;
