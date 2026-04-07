import { act, useEffect, useReducer, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import { ProductProvider } from "./context/ProductProvider";
import Homepage from "./page/Homepage";
import About from "./page/About";
import WeddingsAndEvents from "./page/WeddingsAndEvents";
import ProductPage from "./page/ProductPage";

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
  return (
    <ProductProvider>
      <BrowserRouter>
        <header className="header">
          <NavLink to="/">Home</NavLink>
          <NavBar flowerCategories={flowerCategories} />
          <NavLink to="/weddings-and-events">Weddings & Events</NavLink>
          <NavLink to="/about">About</NavLink>
        </header>
        <main>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="weddings-and-events" element={<WeddingsAndEvents />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ProductProvider>
  );
}
{
  /* <div>
 
  <ProductList flowerList={filteredFlower} />
</div>; */
}
export default App;
