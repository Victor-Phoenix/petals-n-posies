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
      <div className="flex w-50 shrink-0 ">
        <Link to="/" onClick={() => dispatch(categorySelect("all"))}>
          Petals & Posies
        </Link>
      </div>
      <nav className="flex gap-8 justify-center ">
        <NavBar />
        <Link to="/weddings-events">Weddings & Events</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="relative w-40 flex justify-center px-8">
        <Link to="cart" className="px-8 ">
          <ShoppingCart size={32} strokeWidth={2.9} />
          {/* TODO: CHANGE TO 0 AFTER FIXING THE POSITION  */}
          {cart.length > -1 && (
            <span className="bg-red-500 text-black rounded-full font-normal text-sm absolute ">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
