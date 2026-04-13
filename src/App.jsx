import { act, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loading,
  loadFlower,
  categorySelect,
  stopLoading,
  rejected,
  flowerSelect,
} from "./context/flowerSlice";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./page/AppLayout";
import ProductPage from "./page/ProductPage";
import ProductList from "./components/ProductList";
import About from "./page/About";
import WeddingsAndEvents from "./page/WeddingsAndEvents";
import Cart from "./features/cart/cart";

const flowerCategories = [
  "Romance",
  "Birthday",
  "Congratulations",
  "Get Well",
  "Thank You",
  "New Baby",
  "Funeral",
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "about", element: <About /> },
      { path: "weddings-events", element: <WeddingsAndEvents /> },
      {
        path: "checkout",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
