import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFlower, loading, rejected } from "../context/flowerSlice";

function AppLayout() {
  const { flowerList, currentFlower, isLoading, selectedCategory, error } =
    useSelector((state) => state.flower);

  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchFlowers() {
        try {
          dispatch(loading());
          const res = await fetch(`http://localhost:9000/flowerList`);
          const data = await res.json();
          // console.log(data);
          dispatch(loadFlower(data));
        } catch (err) {
          dispatch(rejected(err));
        }
      }
      fetchFlowers();
    },
    [dispatch],
  );

  return (
    <>
      <Header />
      <Outlet />
      {/* <ProductList /> */}
    </>
  );
}
export default AppLayout;
