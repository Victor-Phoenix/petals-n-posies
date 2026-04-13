import { act, useEffect, useReducer, useState } from "react";
// import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
// import ProductList from "./components/ProductList";
// import NavBar from "./components/NavBar";
// import Homepage from "./page/Homepage";
// import About from "./page/About";
// import WeddingsAndEvents from "./page/WeddingsAndEvents";
// import ProductPage from "./page/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import {
  loading,
  loadFlower,
  categorySelect,
  stopLoading,
  rejected,
  flowerSelect,
} from "./context/flowerSlice";

const flowerCategories = [
  "Romance",
  "Birthday",
  "Congratulations",
  "Get Well",
  "Thank You",
  "New Baby",
  "Funeral",
];

function App() {
  const { flowerList, currentFlower, isLoading, selectedCategory, error } =
    useSelector((state) => state.flower);
  //   useEffect(function () {
  //     // console.log("Fetching");
  //     async function fetchFlowers() {
  //       try {
  //         dispatch({ type: "loading" });
  //         const res = await fetch(`${BASE_URL}/flowerList`);
  //         const data = await res.json();
  //         // console.log(data);
  //         dispatch({ type: "flower/loaded", payload: data });
  //       } catch (err) {
  //         // console.log("Error Loading Data");
  //       } finally {
  //         dispatch({ type: "stopLoading" });
  //       }
  //     }
  //     fetchFlowers();
  //   }, []);
  const dispatch = useDispatch();
  useEffect(function () {
    async function fetchFlowers() {
      try {
        dispatch(loading());
        const res = await fetch(`http://localhost:9000/flowerList`);
        const data = await res.json();
        console.log(data);
      } catch (err) {
        dispatch(rejected(err));
      }
    }
    fetchFlowers();
  }, []);

  return (
    <div>Hello</div>
    // <BrowserRouter>
    //   <header className="header">
    //     <NavLink to="/">Home</NavLink>
    //     {/* <NavBar flowerCategories={flowerCategories} /> */}
    //     <NavLink to="/weddings-and-events">Weddings & Events</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route index element={<Homepage />} />
    //       <Route path="about" element={<About />} />
    //       <Route path="weddings-and-events" element={<WeddingsAndEvents />} />
    //       <Route path="product/:id" element={<ProductPage />} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
  );
}
{
  /* <div>
  
    <ProductList flowerList={filteredFlower} />
  </div>; */
}
export default App;

const router = createBrowserRouter([{ element: AppLayout }]);

function App() {
  return <RouterProvider router={router} />;
}
