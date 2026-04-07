import { useProduct } from "../context/ProductProvider";

function NavBar({ flowerCategories }) {
  const { onFilter } = useProduct();
  return (
    <nav className="dropdown">
      <button className="dropbtn">Ocassions</button>
      <div className="dropdown-content">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onFilter("all");
          }}
        >
          All Flowers
        </a>
        {flowerCategories.map((category) => (
          <a
            key={category}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onFilter(category);
            }}
          >
            {category}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
