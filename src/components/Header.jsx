import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { categorySelect } from "../context/flowerSlice";
import { getCart } from "../features/cart/cartSlice";
import { ShoppingCart } from "lucide-react";
function Header() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const { flowerList, currentFlower, isLoading, selectedCategory, error } =
    useSelector((state) => state.flower);
  console.log(cart);
  return (
    <header className=" bg-yellow-300 header flex items-center justify-between    border-gray-200 p-4 h-20">
      <div className="flex w-40 shrink-0 ">
        <Link to="/" onClick={() => dispatch(categorySelect("all"))}>
          HOMEPAGE
          {/* <img
              src="src\assets\imgs\Logo.svg"
              alt="Petals & Posies Logo"
              className="h-10 "
            /> */}
        </Link>
      </div>
      <nav className="flex gap-8 justify-center ">
        <NavBar />
        <Link to="/weddings-events" className="text-xl ">
          Weddings & Events
        </Link>
        <Link to="/about" className="text-xl">
          About
        </Link>
      </nav>
      <div className="w-40 flex justify-end px-8">
        <Link to="cart" className="px-8 relative">
          <ShoppingCart size={24} />
          <span className="bg-red-500 text-black rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
