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
    <header className=" bg-yellow-300 header flex items-center justify-between text-2xl font-medium    border-gray-200 p-4 h-20">
      <div className="flex shrink-0 ">
        <Link to="/" onClick={() => dispatch(categorySelect("all"))}>
          Petals & Posies
        </Link>
      </div>
      <nav className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-center ">
        <NavBar />
        <Link
          to="/weddings-events"
          className=" transition-colors duration-300 hover:bg-amber-100"
        >
          Weddings & Events
        </Link>
        <Link
          to="/about"
          className="transition-colors duration-300 hover:bg-amber-100"
        >
          About
        </Link>
      </nav>
      <div className="relative  flex justify-center">
        <Link to="cart" className="">
          <ShoppingCart size={32} strokeWidth={2.9} />
          {/* TODO: CHANGE TO 0 AFTER FIXING THE POSITION  */}
          {cart.length > -1 && (
            <span className="bg-red-500 text-black rounded-full font-normal text-sm absolute -top-1 -right-1 px-1">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
