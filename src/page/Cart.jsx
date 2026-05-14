  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    getTotalSum,
    getCart,
  } from "../features/cart/cartSlice";
  import { Link } from "react-router-dom";
  import { loadStripe } from "@stripe/stripe-js";
  const stripePromise = loadStripe("pk_test_123");

  function Cart() {
    const cart = useSelector(getCart);
    const cartTotal = useSelector(getTotalSum);
    const deliveryDate = useSelector((state) => state.cart.deliveryDate);
    const dispatch = useDispatch();

    const proceedToPayment = async () => {
      console.log("BUTTON CLICKED"); // add this as first line
      console.log("Cart items:", cart);

      const orderPayload = {
        deliveryDate: deliveryDate,
        items: cart.map((item) => ({
          flowerId: item.id,
          variantType: item.type,
          quantity: item.quantity,
        })),
      };

      const orderResponse = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      console.log("Status:", orderResponse.status);
      const order = await orderResponse.json();
      console.log("Order response:", order);

      console.log("Sending payload:", JSON.stringify(orderPayload));
      // STOP if order creation failed
      if (!orderResponse.ok) {
        console.error("Order creation failed:", order);
        return;
      }

      const payResponse = await fetch(
        `http://localhost:8080/api/orders/${order.id}/pay`,
        { method: "POST" },
      );
      const stripeUrl = await payResponse.text();
      window.location.href = stripeUrl;
    };

    console.log(deliveryDate);
    return (
      <div className=" flex flex-col p-2 mx-auto w-full max-w-xl justify-between border-gray-900  border bg-gray-100 ">
        <h3>Shopping Cart</h3>
        {cart.map((item) => {
          console.log(item);
          return (
            <div className="border-b  grid grid-cols-2 ">
              <div className="py-1">
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
                <span>Total Price {item.price * item.quantity}</span>
              </div>
            </div>
          );
        })}
        <div className="py-2 flex justify-between item ">
          <h1>Total cost: {cartTotal}</h1>
          <div className="">
            {deliveryDate ? (
              <h2>
                Delivery Date:{" "}
                <span>
                  {new Date(deliveryDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </h2>
            ) : (
              " "
            )}
          </div>
        </div>
        <button
          onClick={proceedToPayment}
          className="bg-pink-400 text-white py-2 px-4 rounded"
        >
          CHECKOUT
        </button>
      </div>
    );
  }

  export default Cart;
