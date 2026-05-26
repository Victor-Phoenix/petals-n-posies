import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFlower, loading, rejected } from "../context/flowerSlice";
import Footer from "../components/Footer";

function AppLayout() {
  const { flowerList, currentFlower, isLoading, selectedCategory, error } =
    useSelector((state) => state.flower);

  const dispatch = useDispatch();

  useEffect(
    function () {
      async function fetchFlower() {
        try {
          dispatch(loading());
          const res = await fetch(`http://localhost:8080/flower/getAll`);
          const data = await res.json();
          dispatch(loadFlower(data));
        } catch (err) {
          console.log(err);
        }
      }

      fetchFlower();
    },
    [dispatch],
  );

  return (
    <div className="bg-yellow-50  min-h-screen flex flex-col  ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default AppLayout;
