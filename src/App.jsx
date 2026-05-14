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
import Homepage from "./page/Homepage";
import Admin from "./page/Admin";
import Checkout from "./page/Checkout";
import Cart from "./page/Cart";
import SuccesfulPayment from "./page/SuccesfulPayment";
import AdminOrder from "./page/AdminOrder";
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
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },

  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/AdminOrder",
    element: <AdminOrder />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },

  {
    path: "success",
    element: <SuccesfulPayment />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
