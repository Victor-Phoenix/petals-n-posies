import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { categorySelect } from "../context/flowerSlice";
import { ShoppingCart } from "lucide-react";
function Header() {
  const dispatch = useDispatch();

  const { flowerList, currentFlower, isLoading, selectedCategory, error } =
    useSelector((state) => state.flower);

  return (
    <header className=" bg-amber-100 header flex items-center justify-between   p-4 mb-2">
      <div className="flex w-40 shrink-0">
        <Link to="/" onClick={() => dispatch(categorySelect("all"))}>
          HOMEPAGE{" "}
          {/* <img
            src="src\assets\imgs\Logo.svg"
            alt="Petals & Posies Logo"
            className="h-10 "
          /> */}
        </Link>
      </div>
      <nav className="flex gap-8 justify-center ">
        <NavBar />
        <Link to="/weddings-events">Weddings & Events</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="w-40 flex justify-end px-8">
        <Link to="/checkout" className="px-8">
          <ShoppingCart size={24} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
