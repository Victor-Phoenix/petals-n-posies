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
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import AppLayout from "./page/AppLayout";
import ProductPage from "./page/ProductPage";
import ProductList from "./components/ProductList";
import About from "./page/About";
import WeddingsAndEvents from "./page/WeddingsAndEvents";
import Cart from "./page/Cart";
import Homepage from "./page/Homepage";
import OrderForm from "./features/Order/OrderForm";
import Checkout from "./features/Order/Checkout";
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
      // Index means that this is the default page when the URL path is default
      { index: true, element: <Homepage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "about", element: <About /> },
      { path: "weddings-events", element: <WeddingsAndEvents /> },
    ],
  },

  {
    path: "/NewOrder",
    element: <OrderForm />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
