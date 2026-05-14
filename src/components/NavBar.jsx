import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categorySelect } from "../context/flowerSlice";

// NavBar.jsx
const categories = [
  "Romance",
  "Birthday",
  "Congratulations",
  "Get Well",
  "Thank You",
  "New Baby",
  "Funeral",
];
function NavBar() {
  const { selectedCategory } = useSelector((state) => state.flower);
  const dispatch = useDispatch();

  function handleFilter(category) {
    dispatch(categorySelect(category));
    navigate("/"); // Navigate to the home page after selecting a category
  }
  const navigate = useNavigate();

  return (
    <nav className="relative group w-fit">
      {/* 1. The Trigger Button */}
      <button className="inline-flex w-full rounded bg-transparent border-none  font-medium text-2xl ">
        Occasions
      </button>

      {/* 2. The Menu: 'hidden' by default, 'group-hover:block' shows it on hover */}
      <div className="hidden group-hover:flex flex-col absolute left-0 bg-white border shadow-lg pt-2 w-48 z-50">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-2 text-left hover:bg-gray-100 border-b"
            onClick={() => handleFilter(cat === "All Flowers" ? "all" : cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
