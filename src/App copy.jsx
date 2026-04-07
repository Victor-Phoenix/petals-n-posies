import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

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
const initialState = {
  flowerList: [],
  isLoading: false,
  selectedCategory: "all",
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "flower/loaded":
      return { ...state, isLoading: false, flowerList: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "category/select":
      return { ...state, selectedCategory: action.payload };
    default:
      throw new Error("unknown action");
  }
}
const BASE_URL = "http://localhost:9000";

function App() {
  const [{ flowerList, isLoading, selectedCategory }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(function () {
    console.log("Fetching");
    async function fetchFlowers() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/flowerList`);
        const data = await res.json();
        dispatch({ type: "flower/loaded", payload: data });
      } catch (err) {
        console.log("Error Loading Data");
      } finally {
        dispatch({ type: "rejected", payload: "Error loading data" });
      }
    }
    fetchFlowers();
  }, []);

  const displayedFlowers =
    selectedCategory === "all"
      ? flowerList
      : flowerList.filter((flower) =>
          flower.categories.includes(selectedCategory),
        );

  function handleFilter(category) {
    dispatch({ type: "category/select", payload: category });
  }
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap everything in the Router */}
      <div className="App">
        <NavBar onFilter={handleFilter} flowerCategories={flowerCategories} />
        <Routes>
          <Route
            path="/"
            element={<ProductList flowerList={displayedFlowers} />}
          />
          {/* <Route
            path="/category/:categoryName"
            element={<ProductList products={product} />}
          /> */}
          {/* <Route
            path="/product/:id"
            element={<ProductPage flowerList={flowerList} />}
          />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function ProductList({ flowerList }) {
  console.log(flowerList);
  // if (!Array.isArray(flowerList)) return <p>No Products Found</p>;
  return (
    <div className="products-container">
      <ol className="product-list">
        {flowerList.map((item) => {
          return (
            <div key={item.id} className="item-container">
              <li className="item" style={{ listStyle: "none" }}>
                <Link to={`/product/${item.id}`}>
                  <h1></h1>
                  <img
                    src={item.imageUrl}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </li>
              <div className="item-name-price">
                <span>
                  <p>{item.name}</p>
                </span>
                <span>
                  <p>Price: {item.price}</p>
                </span>
              </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
}
function MapCategory({ flowerCategories, onFilter }) {
  return flowerCategories.map((category) => {
    return (
      <NavLink
        to={`/category/${category}`}
        key={category}
        onClick={() => onFilter(category)}
      >
        {category}
      </NavLink>
    );
  });
}

function NavBar({ flowerCategories, onFilter }) {
  return (
    <div>
      <nav>
        <button className="dropdown">
          Ocassions
          <div className="dropdown-content">
            {}

            <MapCategory
              flowerCategories={flowerCategories}
              onFilter={onFilter}
            />
          </div>
        </button>
      </nav>
    </div>
  );
}

export default App;
